#!/usr/bin/env python3
# Material-Resume builder, by Tyler Krupicka

from jinja2 import Environment, FileSystemLoader
import os, json

class Builder():
	def __init__(self):
		self.this_dir = os.path.dirname(os.path.abspath(__file__))
		self.environment = Environment(loader=FileSystemLoader(self.this_dir + "/templates"),trim_blocks=True)
		self.config = {}

	def load_configs(self):
		self.load_config("configs/config.json") #Main config
		self.load_config("configs/education.json") #Education config
		self.load_config("configs/employment.json") #Employment config

	def load_config(self, path):
		with open(path) as config:
			data = json.load(config)
		self.config.update(data)

	def write_config(self, path, data):
		with open(path, "w") as config:
			config.write(json.dumps(data, indent=4, sort_keys=True))

	def build_index(self):
		html = self.environment.get_template('template.html').render(self.config)
		with open("index.html", "w") as index:
			index.write(html)

if __name__ == '__main__':
	b = Builder()
	b.load_configs()
	b.build_index()
