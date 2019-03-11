#!/usr/bin/env node
// const [,, ...args] = process.argv;
// console.log('hello claudia malasquezjaajsjasjsjajsjasjsjajas');
"use strict";

var mdLinks = require('./index.js');

var program = require('commander');

program.arguments('<path>').option('-v, --validate', 'validar los links rotos').option('-s, --stats', 'calcula la stats de los links').action(mdLinks).parse(process.argv);
var option = {
  validate: program.validate,
  stats: program.stats
};
var route = program.args[0];

if (!route) {
  console.log('Debes ingresar una ruta');
} else {
  mdLinks(route, option).then(function (arrLinks) {
    if (arrLinks.length === 0) {
      console.log('Este archivo no tiene links para mostrar');
    } else if (option.validate && option.stats) {
      console.log("Total: ".concat(arrLinks.total, " \nUnique: ").concat(arrLinks.unique, " \nBroquen: ").concat(arrLinks.broken));
    } else if (option.validate) {
      arrLinks.forEach(function (element) {
        return console.log("".concat(element.file, " ").concat(element.href, " ").concat(element.status, " ").concat(element.statusText, " ").concat(element.text));
      });
    } else if (option.stats) {
      console.log("Total: ".concat(arrLinks.total, " \nUnique: ").concat(arrLinks.unique));
    } else {
      arrLinks.forEach(function (element) {
        return console.log("".concat(element.file, " ").concat(element.href, " ").concat(element.text));
      });
    }
  });
}