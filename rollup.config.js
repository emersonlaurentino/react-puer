import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import { sizeSnapshot } from "rollup-plugin-size-snapshot";
import { uglify } from "rollup-plugin-uglify";
import { minify } from 'uglify-es';

import pkg from './package.json'

export default {
  input: "react-puer.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "es" },
    { file: pkg["umd:main"], format: "umd", name: pkg.name }
  ],
  plugins: [
    resolve(),
    babel({ exclude: "node_modules/**" }),
    uglify({}, minify),
    sizeSnapshot()
  ]
};
