# Webpack 2 VS Rollup

The idea is to compare the build between Webpack 2 and Rollup, checking features like Tree Shaking (recently added in Webpack 2). 

Note: Unlike tests like [this one](https://gist.github.com/forabi/2a538b263d0f1fe5f041), It really checks the comparison between the weight of the files, 'cause won't create a separated source map file. 

## Comparison

Webpack Version: `2.2.0-rc.1`

Rollup Version: `0.37.0`

| . | Compressed without sourcemap | Compressed with **inline** sourcemap
| --- | --- | --- |
| Webpack | 26,953 bytes (29 KB on disk) | ~384K
| Rollup | 17,450 bytes (20 KB on disk) | ~208K

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