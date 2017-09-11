include builder/compile.mk

pre-build:
	-mkdir -p lib
	-mkdir -p dist

lib/objects.js: src/index.js
	$(BABEL) $< -o $@

dist/objects.js: src/index.js
	$(BABEL) $(CFLAGS) $< -o $@

dist/objects.min.js: src/index.js
	$(BABEL) $(CFLAGS) --minified $< -o $@

dist-all: pre-build dist/objects.js dist/objects.min.js

all: test dist-all lib/objects.js

test:
	$(MOCHA) $(TEST_CFLAGS) tests/*.js

clean:
	rm -rf lib dist examples/index.js

clean-all: clean
	rm -rf node_modules
