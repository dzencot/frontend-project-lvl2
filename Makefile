install:
	npm install

install-deps:
	npm ci

publish:
	npm publish --dry-run

lint:
	npx eslint .

test:
	npx -n --experimental-vm-modules jest 

test-coverage:
	npx -n --experimental-vm-modules jest --coverage

diff:
	bin/getdiff.js __fixtures__/1.yaml __fixtures__/2.json

