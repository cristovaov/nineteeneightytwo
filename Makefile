MAKEFLAGS += --warn-undefined-variables
SHELL := bash
.SHELLFLAGS := -eu -o pipefail -c
.DEFAULT_GOAL := test
.DELETE_ON_ERROR:
.SUFFIXES:

.PHONY: test

test:
	@echo "Hello!"

hugo_source := src
hugo_public := public
URL ?= https://the1982.netlify.com

DEPLOY_URL ?= /
DEPLOY_PRIME_URL ?= /
URL_TEST ?= http://example.org/

.PHONY: hugo hugo/clean_pub hugo/local hugo/branch hugo/public

hugo:
	@hugo version

hugo/clean_pub:
	@rm -rf $(hugo_public)

hugo/local: | hugo hugo/clean_pub
	@cd $(hugo_source) && \
	hugo server --buildDrafts

hugo/branch: | hugo hugo/clean_pub netlify/urls
	@cd $(hugo_source) && \
	hugo --baseURL "$(DEPLOY_PRIME_URL)"
	@mv $(hugo_source)/$(hugo_public) .

hugo/public: | hugo hugo/clean_pub
	@cd $(hugo_source) && \
	npm install && npm run build && \
	hugo --baseURL "$(URL)"
	@mv $(hugo_source)/$(hugo_public) .

.PHONY: netlify/urls

netlify/urls:
	@echo "URL = \"$(URL)\""
	@echo "DEPLOY_URL = \"$(DEPLOY_URL)\""
	@echo "DEPLOY_PRIME_URL = \"$(DEPLOY_PRIME_URL)\""
