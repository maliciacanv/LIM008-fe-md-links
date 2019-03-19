import { validateLink, uniqueLinks, totalLinks, brokenLinks } from '../src/functions/options.js';

const path = require('path');

const links = [
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
         `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`}
];

const arrObjLinks = [ 
  { href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file:
        path.resolve(`${process.cwd()}\\test\\testdeprueba\\archivo5.Md`),
    status: 200,
    statusText: 'OK' },
  { href:
         'https://developer.mozilla.org/es/docs/Web/JavaScript/Guideeee/Regular_Expressions',
  text: 'expresiones regulares (<code>RegExp</code>)',
  file:
      path.resolve(`${process.cwd()}\\test\\testdeprueba\\archivo5.Md`),
  status: 404,
  statusText: 'Fail' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
        path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo3.md`),
    status: 200,
    statusText: 'OK' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
        path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo3.md`),
    status: 200,
    statusText: 'OK' },
  { href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de <code>npm install</code> acá',
    file:
        path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`),
    status: 200,
    statusText: 'OK' },
  { href: 'https://giithub.com/Laboratoria/course--parser',
    text: '<code>course-parser</code>',
    file:
        path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`),
    status: 'Not exist', 
    statusText: 'Not exist'},
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
        path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`),
    status: 200,
    statusText: 'OK' }];

const fetchMock = require('../__mocks__/node-fetch.js');

fetchMock.config.sendAsJson = true;
fetchMock.config.fallbackToNetwork = false;

describe('validateLink', () => {
  it('deberia ser una función', () => {
    expect(typeof validateLink).toEqual('function');
  });
  // it('el imput que ingresa no debe ser una array', () => {
  //   return validateLink(links)
  //     .catch((err) => { 
  //       expect(err).toEqual('');
  //     });
  // });
});
describe('validateLink', () => {
  it('deberia retornar una promesa array de objetos con todos los liks validados con propiedades haref,file,text,status,statusText', () => {
    fetchMock
      .get('https://github.com/markdown-it/markdown-it', {status: 200, statusText: 'OK'})
      .get('https://developer.mozilla.org/es/docs/Web/JavaScript/Guideeee/Regular_Expressions', {status: 404},
        new Promise((resolve, reject) => {
          resolve();
        }))
      .get('https://docs.npmjs.com/cli/install', {status: 200, statusText: 'OK'})
      .get('https://giithub.com/Laboratoria/course--parser', {status: 'Not exist'}, 
        new Promise((resolve, reject) => {
          resolve();
        }))
      .get('https://es.wikipedia.org/wiki/Markdown', {status: 200, statusText: 'OK'});

    validateLink(links)
      .then(response => { 
        expect(response).toEqual(arrObjLinks);
      });
  });
});


describe('uniqueLinks', () => {
  it('deberia ser funcion', () => {
    expect(typeof uniqueLinks).toBe('function');
  });
  it('debería retornar la cantidad de los links unicos', () => {
    return expect(uniqueLinks(arrObjLinks)).toEqual(5);
  });
});
describe('totalLinks', () => {
  it('deberia ser funcion', () => {
    expect(typeof totalLinks).toBe('function');
  });
  it('debería retornar la cantidad de los links unicos', () => {
    return expect(totalLinks(arrObjLinks)).toEqual(7);
  });
});
describe('brokenLinks', () => {
  it('deberia ser funcion', () => {
    expect(typeof brokenLinks).toBe('function');
  });
  it('debería retornar la cantidad de links rotos', () => {
    return expect(brokenLinks(arrObjLinks)).toEqual(2);
  });
});

