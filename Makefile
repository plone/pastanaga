SHELL := /bin/bash
CURRENT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

all: clean build test

clean:
	@echo "Clean"
	rm -rf bin build include lib

build:
	@echo "Build"
	virtualenv-2.7 . | virtualenv .
	bin/pip install -r requirements.txt

test:
	@echo "Run Tests"
	bin/pybot test.robot

test-foreground:
	@echo "Run Tests in foreground"
	bin/pybot --variable HEADLESS:False test.robot
