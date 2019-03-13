#!/usr/bin/env node
import { mdLinks } from './index.js';
import { totalLinks, uniqueLinks, brokenLinks } from '../functions/options.js';

const program = require('commander');

program 
  . arguments('path')
  . option('-v, --validate', 'validar los links rotos') 
  . option('-s, --stats', 'calcula la stats de los links') 
  . action(mdLinks)
  . parse(process.argv);

const option = {
  validate: program.validate,
  stats: program.stats
};

const route = program.args[0];

if (!route) {
  console.log('Debes ingresar una ruta');
} else { 
  mdLinks(route, option)
    .then(arrLinks => { 
      if (arrLinks.length === 0) {
        console.log('Este archivo no tiene links que mostrar');
      } else if (option.validate && option.stats) {
        console.log(`Total: ${totalLinks(arrLinks)} \nUnique: ${uniqueLinks(arrLinks)}  \nBroquen: ${brokenLinks(arrLinks)}`);
      } else if (option.stats) {
        console.log(`Total: ${totalLinks(arrLinks)}  \nUnique: ${uniqueLinks(arrLinks)}`);
      } else if (option.validate) {
        arrLinks.forEach(element => 
          console.log(`${element.file}  ${element.href}  ${element.status}  ${element.statusText}  ${element.text}`));
      } else {
        arrLinks.forEach(element => 
          console.log(`${element.file}  ${element.href}  ${element.text}`));
      }
    }).catch(err => (err));
};