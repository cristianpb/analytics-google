
venv:
	# install some software with a dev image here
	python3 -m venv venv
	venv/bin/pip install -U -r requirements.txt

up: venv
	venv/bin/python3 app.py

data.csv:
	venv/bin/python3 analytics.py

data: data.csv

dist:
	mkdir -p dist/static

build: dist
	venv/bin/python3 render.py
	cp data.csv dist
	cp static/countries.geo.json dist/static
	cp -r static/graph.js dist

clean:
	rm -Rf venv dist
