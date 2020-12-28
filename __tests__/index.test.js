import fs from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import getDiff from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getFixturePath = (filename) => join(__dirname, '..', '__fixtures__', filename);

test('compare two flat JSONs', () => {
  expect(getDiff('__fixtures__/flat-1.json', '__fixtures__/flat-2.json'))
    .toEqual(fs.readFileSync(getFixturePath('expected-flat.txt'), 'utf-8'));
});

test('compare two flat YAMLs', () => {
  expect(getDiff('__fixtures__/flat-1.yaml', '__fixtures__/flat-2.yml'))
    .toEqual(fs.readFileSync(getFixturePath('expected-flat.txt'), 'utf-8'));
});
