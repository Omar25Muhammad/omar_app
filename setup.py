from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in omar_app/__init__.py
from omar_app import __version__ as version

setup(
	name="omar_app",
	version=version,
	description="An app to practise ERPNexp & Frappe framework",
	author="Me",
	author_email="shehada.mk.omar@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
