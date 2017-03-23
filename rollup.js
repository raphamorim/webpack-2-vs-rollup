import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import node from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';

let babelConfig = {
  presets: ['es2015-rollup']
};

export default {
  entry: 'src/example.js',
  dest: 'dist/rollup-bundle.js',
  plugins: [
    babel(Object.assign({
      exclude: 'node_modules/**',
      babelrc: false,
    }, babelConfig)),
    node({
      jsnext: true,
      main: true
    }),
    commonjs({
      include: 'node_modules/**'
    }),
    uglify()
  ],
  // sourceMap: 'inline',
  format: 'iife',
  sourceMap: true
};
