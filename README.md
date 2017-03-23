# Webpack 2 VS Rollup

The idea is to compare the build between [Webpack 2](https://github.com/webpack/webpack) and [Rollup](https://github.com/rollup/rollup), checking features like Tree Shaking (recently added in Webpack 2).

Note: Unlike tests like [this one](https://gist.github.com/forabi/2a538b263d0f1fe5f041), It'll check the comparison between differences about **file compression**, without create a separated source map file.

## Comparison

Webpack Version: `2.3.1`

Rollup Version: `0.41.6`

| . | Compressed without sourcemap | Separate Sourcemap Size
| --- | --- | --- |
| Webpack | ~28 KB | ~360K
| Rollup | ~20 KB | ~144K

## Example.js

```js
import concat from 'lodash-es/concat';
import sortBy from 'lodash-es/sortBy';
import map from 'lodash-es/map';
import sample from 'lodash-es/sample';

// Example: sortBy
const users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 42 },
  { 'user': 'barney', 'age': 34 }
];
const exampleSortBy = sortBy(users, function(o) { return o.user; });
console.log(exampleSortBy);

// Example: map
const exampleMap = map(users, 'user');
console.log(exampleMap);

// Example: concat
const array = [1];
const exampleConcat = concat(array, 2, [3], [[4]]);
console.log(exampleConcat);

// Example: sample
const exampleSample = sample([1, 2, 3, 4]);
console.log(exampleSample);
```

## Run tests

Just run:

```
$ npm install && make comparison
```
