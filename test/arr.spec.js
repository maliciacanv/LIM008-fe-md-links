import {arrRoutesMd,
  extrackLinks } from '../src/functions/arr.js';

const path = require('path');

const arrRoutesFile = [
  path.resolve(`${process.cwd()}\\test\\arr.spec.js`),
  path.resolve(`${process.cwd()}\\test\\cli.spec.js`),
  path.resolve(`${process.cwd()}\\test\\mdLinks.spec.js`),
  path.resolve(`${process.cwd()}\\test\\options.spec.js`),
  path.resolve(`${process.cwd()}\\test\\path.spec.js`),
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\archivo1.txt`),
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\archivo2.txt`),
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\archivo5.Md`),
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo3.md`),
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`),
];


const arrFilterMd = [
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\archivo5.Md`),
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo3.md`),
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`),
];

const link = [
  { href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file:
    path.resolve(`${process.cwd()}\\test\\testdeprueba\\archivo5.Md`)},
  { href:
       'https://developer.mozilla.org/es/docs/Web/JavaScript/Guideeee/Regular_Expressions',
  text: 'expresiones regulares (<code>RegExp</code>)',
  file:
  path.resolve(`${process.cwd()}\\test\\testdeprueba\\archivo5.Md`)},
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
    path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo3.md`)},
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
    path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo3.md`)},
   
  { href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de <code>npm install</code> acá',
    file:
    path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`)},
  { href: 'https://giithub.com/Laboratoria/course--parser',
    text: '<code>course-parser</code>',
    file:
    path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`)},
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
    path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`)},
];


describe('arrRoutesMd', () => {
  it('deberia ser una funcion', () => {
    expect(typeof arrRoutesMd).toBe('function');
  });
  it('debe retornar un array filtrado con las rutas .md', () => {
    return expect(arrRoutesMd(arrRoutesFile)).toEqual(arrFilterMd);
  });
});

describe('extrackLinks', () => {
  it('deberia ser funcion', () => {
    expect(typeof extrackLinks).toBe('function');
  });
  it('extrae los links en array de objetos, con las propiedades href, text, file', () => {
    return expect(extrackLinks(arrFilterMd)).toEqual(link);
  });
});

