#!/usr/bin/env python3
"""Actualiza data/front-ua.js con los archivos diarios de DeepStateMap.

Uso:
  git clone --depth 1 https://github.com/cyterat/deepstate-map-data /tmp/dsm
  python3 scripts/sync_front_ua.py /tmp/dsm/data

Agrega a `daily` la superficie ocupada (km², geodésica sobre WGS84) de cada día
posterior a `last`, y a `frames` una geometría simplificada cada 7 días más la
del último día disponible (que se reemplaza en la próxima corrida si no cae en
la cadencia semanal). No toca `early`, `kursk` ni los textos de fuente.
"""
import datetime as dt
import json
import os
import re
import sys

from pyproj import Geod
from shapely.geometry import mapping, shape

OUT = os.path.join(os.path.dirname(__file__), "..", "data", "front-ua.js")
GEOD = Geod(ellps="WGS84")
TOL = 0.01  # grados, como las tramas que ya estaban cargadas


def load_js(path):
    txt = open(path, encoding="utf-8").read().strip()
    return json.loads(re.sub(r"^window\.FRONT_UA\s*=\s*", "", txt).rstrip(";"))


def day(s):
    return dt.date.fromisoformat(s)


def read_geom(data_dir, d):
    f = os.path.join(data_dir, f"deepstatemap_data_{d.strftime('%Y%m%d')}.geojson")
    if not os.path.exists(f):
        return None
    fc = json.load(open(f, encoding="utf-8"))
    feats = fc.get("features") or []
    if not feats:
        return None
    return shape(feats[0]["geometry"])


def frame(d, g):
    simple = g.simplify(TOL, preserve_topology=True)
    m = mapping(simple)
    polys = m["coordinates"] if m["type"] == "MultiPolygon" else [m["coordinates"]]
    rnd = [[[[round(x, 3), round(y, 3)] for x, y in ring] for ring in poly] for poly in polys]
    return {"d": d.isoformat(), "a": round(abs(GEOD.geometry_area_perimeter(g)[0]) / 1e6), "g": rnd}


def main(data_dir):
    F = load_js(OUT)
    files = sorted(f for f in os.listdir(data_dir) if re.match(r"deepstatemap_data_\d{8}\.geojson$", f))
    if not files:
        sys.exit("No hay archivos de DeepState en " + data_dir)
    dates = [dt.datetime.strptime(f[18:26], "%Y%m%d").date() for f in files]
    last = day(F["last"])
    new = [d for d in dates if d > last]
    for d in new:
        g = read_geom(data_dir, d)
        if g is None:
            continue
        F["daily"].append([d.isoformat(), round(abs(GEOD.geometry_area_perimeter(g)[0]) / 1e6)])
    if F["daily"]:
        F["last"] = F["daily"][-1][0]
    latest = day(F["last"])

    frames = F["frames"]
    # La última trama puede ser la "del día" de la corrida anterior: se descarta si no cae en la cadencia semanal.
    if len(frames) >= 2 and (day(frames[-1]["d"]) - day(frames[-2]["d"])).days < 7:
        frames.pop()
    nxt = day(frames[-1]["d"]) + dt.timedelta(days=7)
    while nxt <= latest:
        g = read_geom(data_dir, nxt)
        if g is not None:
            frames.append(frame(nxt, g))
        nxt += dt.timedelta(days=7)
    if day(frames[-1]["d"]) < latest:
        g = read_geom(data_dir, latest)
        if g is not None:
            frames.append(frame(latest, g))

    with open(OUT, "w", encoding="utf-8") as fh:
        fh.write("window.FRONT_UA=" + json.dumps(F, separators=(",", ":")) + ";\n")
    print("ok", F["last"], F["daily"][-1][1], "km²", "días nuevos:", len(new), "tramas:", len(frames), frames[-1]["d"])


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
