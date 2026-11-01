"""Genera data/vortex.js con el viento zonal medio a 10 hPa y 60°N (NASA MERRA-2 / GEOS FP):
temporada actual, pronóstico y climatología (mín., percentiles, media, máx.) día por día.
Fuente: NASA Ozone Watch, archivo u60n_10_<año>_merra2.txt. Copia diaria en el repo público
MarcelHerber/climate-dashboard, rama stratosphere-data (data/stratosphere/).
Uso: python3 scripts/sync_vortex.py /ruta/u60n_10_2026_merra2.txt"""
import sys, os, json, re
path = sys.argv[1]
txt = open(path).read().splitlines()
season = int(re.search(r"u60n_10_(\d{4})", path).group(1))
clim_note = next((l.split(":", 1)[1].strip() for l in txt if l.startswith("Climatology")), "")
src_note = next((l.split(":", 1)[1].strip() for l in txt if l.startswith("Source")), "")
rows = []
for l in txt:
    p = l.split()
    if len(p) < 10 or not re.match(r"\d{4}-\d\d-\d\d$", p[0]): continue
    d = p[0]
    if not (f"{season}-08-01" <= d <= f"{season + 1}-04-30"): continue
    v = float(p[1]); f = int(p[9])
    rows.append([d, None if v < -9000 else round(v, 2), *[round(float(x), 2) for x in p[2:9]], f])
obs = [r for r in rows if r[1] is not None and r[9] == 0]
fc = [r for r in rows if r[1] is not None and r[9] > 0]
D = {"season": season, "src": "NASA Ozone Watch, MERRA-2 / GEOS FP", "srcNote": src_note, "clim": clim_note.replace(" to ", " a "),
     "u": f"https://ozonewatch.gsfc.nasa.gov/meteorology/wind_{season}_MERRA2_NH.html",
     "lastObs": obs[-1][:2] if obs else None, "lastFc": fc[-1][:2] if fc else None,
     "cols": ["fecha", "valor", "min", "p10", "p30", "media", "p70", "p90", "max", "pronostico_h"], "rows": rows}
out = os.path.join(os.path.dirname(__file__), "..", "data", "vortex.js")
open(out, "w").write("/* Viento zonal medio a 10 hPa y 60°N (vórtice polar). Generado por scripts/sync_vortex.py */\nwindow.VORTEX=" + json.dumps(D, ensure_ascii=False, separators=(",", ":")) + ";\n")
print("ok", season, D["lastObs"], D["lastFc"], os.path.getsize(out))
