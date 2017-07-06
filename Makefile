# convenience makefile to boostrap & run buildout

version = 2.7

all: .installed.cfg
	bin/buildout

.installed.cfg: bin/buildout *.cfg
	bin/buildout

clean:
	@echo "Clean"
	rm -rf bin build include lib

bin/buildout: bin/pip
	wget https://raw.githubusercontent.com/plone/buildout.coredev/5.1/requirements.txt
	bin/pip install -r requirements.txt
	@touch -c $@

bin/python bin/pip:
	virtualenv --clear --python=python$(version) .

clean:
	git clean -Xdf

.PHONY: all clean
