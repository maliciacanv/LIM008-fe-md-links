#!/usr/bin/env node

// const [,, ...args] = process.argv;
// console.log('hello claudia malasquezjaajsjasjsjajsjasjsjajas');

const mdLinks = require('./index.js');

const program = require('commander');

program 
  . arguments('<path>')
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
        console.log('Este archivo no tiene links para mostrar');
      } else if (option.validate && option.stats) {
        console.log(`Total: ${arrLinks.total} \nUnique: ${arrLinks.unique} \nBroquen: ${arrLinks.broken}`);
      } else if (option.validate) {
        arrLinks.forEach(element => 
          console.log(`${element.file} ${element.href} ${element.status} ${element.statusText} ${element.text}`));
      } else if (option.stats) {
        console.log(`Total: ${arrLinks.total} \nUnique: ${arrLinks.unique}`);
      } else {
        arrLinks.forEach(element => 
          console.log(`${element.file} ${element.href} ${element.text}`));
      }
    });
}


