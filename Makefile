SHELL := /bin/bash
CURRENT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

all: clean build test

clean:
	@echo "Clean"
	rm -rf .py27

build:
	@echo "Build"
	virtualenv-2.7 . | virtualenv .
	bin/pip install -r requirements.txt

test:
	@echo "Run Tests"
	bin/pybot test.robot
