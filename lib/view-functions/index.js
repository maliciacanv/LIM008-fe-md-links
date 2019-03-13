"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _path = require("../functions/path.js");

var _arr = require("../functions/arr.js");

var _options = require("../functions/options.js");

var mdLinks = function mdLinks(route, option) {
  return new Promise(function (resolve, reject) {
    var rutaAbsoluta;

    if ((0, _path.isPathAbsolute)(route) === false) {
      rutaAbsoluta = (0, _path.convertPathAabsolute)(route);
    }

    var arrFiles = (0, _path.openAdirectory)(route);
    var arrMd = (0, _arr.arrRoutesMd)(arrFiles);
    var arrLinks = (0, _arr.extrackLinks)(arrMd);

    if (option.validate === true) {
      (0, _options.validateLink)(arrLinks).then(function (response) {
        resolve(response);
      }).catch(function (err) {
        resolve(err);
      });
    } else {
      resolve(arrLinks);
    }
  });
};

exports.mdLinks = mdLinks;