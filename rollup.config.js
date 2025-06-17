import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'script.js',
    output: {
      file: 'dist/script.js',
      format: 'iife',
      sourcemap: true
    },
    plugins: [
      terser()
    ]
  },
  {
    input: 'style.css',
    output: {
      file: 'dist/style.css',
      format: 'es'
    },
    plugins: [
      postcss({
        extract: true,
        minimize: true,
        plugins: [ require('cssnano')() ]
      })
    ]
  }
];
