"""Genera data/nino.js (Niño-3.4 diario por año, promediado por semana) a partir del
nino34.json del sitio Súper Niño (repo público francomartinlopez/alertahidrica).
Uso: python3 scripts/sync_nino.py /ruta/a/alertahidrica/nino34.json"""
import json, sys, datetime, os
src = json.load(open(sys.argv[1]))
out = {}
for y, v in src["anios"].items():
    w = []
    for i in range(0, len(v), 7):
        seg = [x for x in v[i:i + 7] if x is not None]
        if seg: w.append(round(sum(seg) / len(seg), 2))
    out[y] = w
pron = src.get("pron") or {}
fc = []
for m, val in zip(pron.get("meses", []), pron.get("media", [])):
    y, mo = map(int, m.split("-"))
    doy = (datetime.date(y, mo, 15) - datetime.date(y, 1, 1)).days
    fc.append([y, round(doy / 7, 1), val])
D = {"fuente": src.get("fuente"), "ultimo": src.get("ultimo"), "semanas": out,
     "pron": {"emitido": pron.get("emitido"), "puntos": fc},
     "u": "https://www.cpc.ncep.noaa.gov/products/analysis_monitoring/enso_advisory/",
     "uData": "https://psl.noaa.gov/data/gridded/data.noaa.oisst.v2.highres.html"}
p = os.path.join(os.path.dirname(__file__), "..", "data", "nino.js")
open(p, "w").write("/* Niño-3.4: anomalía de temperatura del mar, promedio semanal por año. Generado por scripts/sync_nino.py */\nwindow.NINO=" + json.dumps(D, ensure_ascii=False, separators=(",", ":")) + ";\n")
print("ok", len(out), D["ultimo"], os.path.getsize(p))
