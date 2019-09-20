
venv:
	# install some software with a dev image here
	python3 -m venv venv
	venv/bin/pip install -U -r requirements.txt

up: venv
	venv/bin/python3 app.py

clean:
	rm -Rf venv
