"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extrackLinks = exports.arrRoutesMd = void 0;

var path = require('path');

var fs = require('fs');

var myMarked = require('marked');
/**
  * @function {filtrar la ruta md en un array de objetos}
  * @param {un array de objetos} arr
  * @returns {un array de objetos de las rutas encontradas que no sea un directorio es decir son archivos md}
  */


var arrRoutesMd = function arrRoutesMd(route) {
  var newArray = [];
  route.forEach(function (element) {
    if (path.extname(element).toLowerCase() === '.md') {
      return newArray.push(element);
    }
  });
  return newArray;
};
/**
   * @function {recorre arrRoutesMd y extrae los links <a> de la ruta con las propiedades href, text, file}
   * @param {un array de objetos} arr
   * @returns {un array de objetos con los links de los archivos md}
 */


exports.arrRoutesMd = arrRoutesMd;

var extrackLinks = function extrackLinks(arrPaths) {
  var arrayLink = [];
  arrPaths.forEach(function (element) {
    var openFile = fs.readFileSync(element, 'UTF8');
    var renderer = new myMarked.Renderer();

    renderer.link = function (href, title, text) {
      arrayLink.push({
        href: href,
        text: text.slice(0, 50),
        file: element
      });
    };

    myMarked(openFile, {
      renderer: renderer
    });
  });
  return arrayLink;
};

exports.extrackLinks = extrackLinks;