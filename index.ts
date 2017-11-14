import mylib = require("mylib");
let ts = mylib;
import mylib_original_js = require("./node_modules/mylib/src/index.js");
let js = mylib_original_js;
ts = js;
js = ts;