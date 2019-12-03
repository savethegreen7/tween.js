const pkg = require('./package.json');
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';
const { uglify } = require('rollup-plugin-uglify');
import babel from 'rollup-plugin-babel';

export default {
	input: 'src/Tween.js',
	output: [
		{
			file: 'dist/tween.umd.js',
			name: 'TWEEN',
			format: 'umd'
		},
		{
			file: 'dist/tween.amd.js',
			format: 'amd'
		},
		{
			file: 'dist/tween.cjs.js',
			format: 'cjs'
		},
		{
			file: 'dist/tween.esm.js',
			format: 'es'
		},
		{
			file: 'dist/tween.iife.js',
			name: 'TWEEN',
			format: 'iife'
		},
		{
			file: 'dist/tween.iife.min.js',
			name: 'TWEEN',
			format: 'iife'
			/* ,plugins: [
				uglify({compress: {
					drop_console: true,
					dead_code: true
				}}),
				babel({
					exclude: 'node_modules/!**'
				})
			] */
		}
	]
};
