from jinja2 import Template

with open('templates/index.html', 'r') as fp:
    data = fp.read()
    f = open("dist/index.html", "w")
    f.write(Template(data).render(prod=True))
    f.close()
