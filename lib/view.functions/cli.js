#!/usr/bin/env node
"use strict";

var _index = require("./index.js");

var _options = require("../functions/options.js");

var program = require('commander');

program.arguments('path').option('-v, --validate', 'validar los links rotos').option('-s, --stats', 'calcula la stats de los links').action(_index.mdLinks).parse(process.argv);
var option = {
  validate: program.validate,
  stats: program.stats
};
var route = program.args[0];

if (!route) {
  console.log('Debes ingresar una ruta');
} else {
  (0, _index.mdLinks)(route, option).then(function (arrLinks) {
    if (option.validate && option.stats) {
      console.log("Total: ".concat((0, _options.totalLinks)(arrLinks), " \nUnique: ").concat((0, _options.uniqueLinks)(arrLinks), "  \nBroquen: ").concat((0, _options.brokenLinks)(arrLinks)));
    } else if (option.stats) {
      console.log("Total: ".concat((0, _options.totalLinks)(arrLinks), "  \nUnique: ").concat((0, _options.uniqueLinks)(arrLinks)));
    } else if (option.validate) {
      arrLinks.forEach(function (element) {
        return console.log("".concat(element.file, " ").concat(element.href, " ").concat(element.status, " ").concat(element.statusText, " ").concat(element.text));
      });
    } else {
      arrLinks.forEach(function (element) {
        return console.log("".concat(element.file, " ").concat(element.href, " ").concat(element.text));
      });
    }
  }).catch(function (err) {
    return err;
  });
}

;