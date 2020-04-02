venv:
	# install some software with a dev image here
	python3 -m venv venv
	venv/bin/pip install -U -r requirements.txt

node_modules:
	npm install

public/data:
	mkdir -p public/data

public/data/data.csv: public/data venv
	venv/bin/python3 analytics.py

data: public/data/data.csv

up: data
	npm run dev

build: node_modules
	npm run build

clean:
	rm -Rf venv node_modules public/data
