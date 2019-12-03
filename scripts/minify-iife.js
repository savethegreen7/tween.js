const fs = require('fs');
const path = require('path');
const {version} = require('../package.json');
const uglifyjs = require('uglify-js');
const moment = require('moment');
const id = moment().format('YYYY-MM-DD HH:mm:ss');
let code = fs.readFileSync(path.resolve('dist', 'tween.iife.js'), 'utf8');
const  result = uglifyjs.minify(code, {
	/*compress: {
		drop_console: true,
		dead_code: true
	},*/
	// output: {
	// 	comments: '/ **.* /'
	// }
});
let rv = '1';
let copyWrite = code.match(/\/(\*)[^*]*\*+(?:[^*\/][^*]*\*+)*\//gm) || '';
code = `${copyWrite}\n// modified ${id} , briller@sk.com , rv ${version}.${rv}\n` + result.code;
fs.writeFileSync(path.resolve('dist', 'tween.iife.min.js'), code);

// uglifyjs ads.js -c drop_console -o ads.min.js
