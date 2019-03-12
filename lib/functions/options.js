"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.brokenLinks = exports.totalLinks = exports.uniqueLinks = exports.validateLink = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var fetch = require('node-fetch');
/**
 * @function {validar} validateLink
 * @param {un array de objetos} arr
 * @returns {un array de objetos con los links validades con propiedades satus, statusText} 
 */


var validateLink = function validateLink(arr) {
  var linkValidate = arr.map(function (links) {
    return new Promise(function (resolve) {
      return fetch(links.href).then(function (response) {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.statusText = response.statusText;
          resolve(links);
        } else {
          links.status = response.statusText;
          links.statusText = 'Not Fail';
          resolve(links);
        }
      }).catch(function () {
        links.status = '', links.statusText = 'Not Fail', resolve(links);
      });
    });
  });
  return Promise.all(linkValidate);
};
/**
 * @function {uniqueLinks} 
 * @param {un array de objetos} arr
 * @returns {la cantidad de los links unicos } 
 */


exports.validateLink = validateLink;

var uniqueLinks = function uniqueLinks(arr) {
  var unique = _toConsumableArray(new Set(arr.map(function (link) {
    return link.href;
  })));

  return unique.length;
};
/**
 * @function {totalLinks} 
 * @param {un array de objetos} arr
 * @returns {la cantidad de los links totales} 
 */


exports.uniqueLinks = uniqueLinks;

var totalLinks = function totalLinks(arr) {
  var total = arr.length;
  return total;
};
/**
 * @function {brokenLinks} 
 * @param {un array de objetos} arr
 * @returns {la cantidad de los links rotos} 
 */


exports.totalLinks = totalLinks;

var brokenLinks = function brokenLinks(arr) {
  var broken = arr.filter(function (link) {
    return link.status === '' || link.status === 'Not Found';
  });
  return broken.length;
};

exports.brokenLinks = brokenLinks;