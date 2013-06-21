MOCHA_OPTS= --check-leaks
REPORTER= dot

test: test-unit coverage report

test-unit:
	@NODE_ENV=test ./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		$(MOCHA_OPTS)

coverage: 
	@NODE_ENV=test ./node_modules/.bin/istanbul cover _mocha -- -R spec

report:
	@NODE_ENV=test ./node_modules/.bin/plato -r -d report/ lib/

clean:
	rm -rf coverage
	rm -rf report

.PHONY: test
