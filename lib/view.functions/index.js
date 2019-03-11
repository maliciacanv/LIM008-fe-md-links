"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _arr = require("../functions/arr.js");

var _options = require("../functions/options.js");

// import { isPathAbsolute, convertPathAabsolute, openAdirectory } from '../functions/path.js';
var isPathAbsolute = require('../functions/path.js');

var option = {
  stats: false,
  validate: false
};

var mdLinks = function mdLinks(route, option) {
  var routeAbsolute = isPathAbsolute(route);
  var rutaAbsoluta = '';

  if (routeAbsolute === false) {
    rutaAbsoluta = convertPathAabsolute(route);
  }

  var arrFiles = openAdirectory(route);
  var arrMd = (0, _arr.arrRoutesMd)(arrFiles);
  var arrLinks = (0, _arr.extrackLinks)(arrMd);

  if (option.validate && option.stats) {
    (0, _options.validateLink)(arrLinks).then(function (response) {
      return {
        total: (0, _options.totalLinks)(response),
        unique: (0, _options.uniqueLinks)(response),
        broken: (0, _options.brokenLinks)(response)
      };
    });
  } else if (option.validate) {
    (0, _options.validateLink)(arrLinks).then(function (response) {
      response;
    });
  } else if (option.stats) {
    (0, _options.validateLink)(arrLinks).then(function (response) {
      return {
        total: (0, _options.totalLinks)(response),
        unique: (0, _options.uniqueLinks)(response)
      };
    });
  } else {
    arrLinks;
  }
}; // mdLinks('test\\testdeprueba\\prueba2\\archivo3.md', '');


exports.mdLinks = mdLinks;