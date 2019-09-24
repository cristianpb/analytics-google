
venv:
	# install some software with a dev image here
	python3 -m venv venv
	venv/bin/pip install -U -r requirements.txt


static/css:
	mkdir -p static/css
	curl https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css -o static/css/bulma.min.css
	curl https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.css -o static/css/leaflet.css

static/js:
	mkdir -p static/js
	curl https://cdnjs.cloudflare.com/ajax/libs/d3/5.12.0/d3.min.js -o static/js/d3.min.js
	curl https://cdnjs.cloudflare.com/ajax/libs/crossfilter/1.3.12/crossfilter.min.js -o static/js/crossfilter.min.js
	curl https://cdnjs.cloudflare.com/ajax/libs/dc/3.1.3/dc.min.js -o static/js/dc.min.js
	curl https://cdnjs.cloudflare.com/ajax/libs/dc/3.1.3/dc.min.js.map -o static/js/dc.min.js.map
	curl https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.5.1/leaflet.js -o static/js/leaflet.js
	curl https://cdnjs.cloudflare.com/ajax/libs/leaflet.heat/0.2.0/leaflet-heat.js -o static/js/leaflet-heat.js

js_libs: static/css static/js

data.csv:
	venv/bin/python3 analytics.py

data: data.csv

up: venv js_libs data
	venv/bin/python3 app.py

dist:
	mkdir -p dist/static

build: venv dist data
	venv/bin/python3 render.py
	cp data.csv dist
	cp static/countries.geo.json dist/static
	cp -r static/graph.js dist
	touch dist/.nojekyll

clean:
	rm -Rf venv dist static/css static/js
