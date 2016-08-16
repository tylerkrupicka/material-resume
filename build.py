#!/usr/bin/env python3

from jinja2 import Environment, FileSystemLoader
import os, json

# Capture our current directory
THIS_DIR = os.path.dirname(os.path.abspath(__file__))

def print_html_doc():
	# Create the jinja2 environment.
	# Notice the use of trim_blocks, which greatly helps control whitespace.
	with open("configs/config.json") as config:
		c = json.load(config)
	a = {}
	a.update(c)
	j2_env = Environment(loader=FileSystemLoader(THIS_DIR + "/templates"),trim_blocks=True)
	html = j2_env.get_template('template.html').render(a)
	with open("index.html", "w") as index:
		index.write(html)
	print(json.dumps(a, indent=4, sort_keys=True))

if __name__ == '__main__':
	print_html_doc()
