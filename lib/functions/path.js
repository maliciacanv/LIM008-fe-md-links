"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.openAdirectory = exports.isAdirectory = exports.convertPathAabsolute = exports.isPathAbsolute = void 0;

var path = require('path');

var fs = require('fs');
/**
* @function {para saber si es una ruta absoluta}
* @param {ruta que va ser ingresada es una acdena de string} path 
* @returns {retorna un valor boleano}
*/


var isPathAbsolute = function isPathAbsolute(route) {
  var isAbsolute = path.isAbsolute(route);
  return isAbsolute;
};
/**
 * @function {para convertir una ruta relativa a una ruta absoluta}
 * @param {ruta, es una cadena de string} path
 * @returns {retorna una cadena de string}
 */


exports.isPathAbsolute = isPathAbsolute;

var convertPathAabsolute = function convertPathAabsolute(route) {
  var pathAbsolute = path.resolve(route);
  return pathAbsolute;
};
/**
 * @function {pregunta si es una directorio}
 * @param {la ruta ingresada} route
 * @returns {boleano, true si es verdadero y false si es falso}
 */


exports.convertPathAabsolute = convertPathAabsolute;

var isAdirectory = function isAdirectory(route) {
  var pathIsDirectory = fs.statSync(route).isDirectory();
  return pathIsDirectory;
};
/**
 * @function {si isAdirectory es true, recorre directorio y devuelve un array de rutas de archivos} funcion recursiva
 * @param {ruta} route
 * @returns {string}
 */


exports.isAdirectory = isAdirectory;

var openAdirectory = function openAdirectory(route) {
  var directoryAndFile = isAdirectory(route);
  var arrRoutesFiles = [];

  if (directoryAndFile === false) {
    arrRoutesFiles.push(route);
  } else {
    var file = fs.readdirSync(route);
    file.forEach(function (element) {
      var directoryChild = path.join(route, element);
      var stats = fs.lstatSync(directoryChild);

      if (stats.isDirectory()) {
        arrRoutesFiles = arrRoutesFiles.concat(openAdirectory(directoryChild));
      } else {
        arrRoutesFiles.push(directoryChild);
      }
    });
  }

  return arrRoutesFiles;
};

exports.openAdirectory = openAdirectory;