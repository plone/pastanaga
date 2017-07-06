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

build-backend:
	@echo "Build Backend"
	docker pull plone/plone.restapi

start-backend:
	@echo "Start Backend"
	docker run -p 8080:8080 plone/plone.restapi

test:
	@echo "Run Tests"
	bin/pybot test.robot

test-foreground:
	@echo "Run Tests in foreground"
	bin/pybot --variable HEADLESS:False test.robot
