import {mdLinks} from '../src/view-functions/index.js';
import { validateLink } from '../src/functions/options.js';

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
    path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`)},
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
  status: 'Not Found',
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
    status: '', 
    statusText: 'Not exist'},
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
        path.resolve(`${process.cwd()}\\test\\testdeprueba\\prueba2\\archivo4.md`),
    status: 200,
    statusText: 'OK' }];


const option = {
  validate: false,
};

const fetchMock = require('../__mocks__/node-fetch.js');

fetchMock.config.sendAsJson = true;
fetchMock.config.fallbackToNetwork = false;


describe('mdLinks', () => {
  it('debería ser una función', () => {
    expect(typeof mdLinks).toEqual('function');
  });
  it('si el input recibe undefind es reject y cae en catch', () => {
    return mdLinks(undefined, {})
      .catch((err) => { 
        expect(err).toEqual(undefined);
      });
  });
  it('debe retornar una promesa con el array de objetos de links validados', () => {
    fetchMock
      .get('https://github.com/markdown-it/markdown-it', {status: 200, statusText: 'OK'})
      .get('https://developer.mozilla.org/es/docs/Web/JavaScript/Guideeee/Regular_Expressions', {status: '', statusText: 'Fail'})
      .get('https://docs.npmjs.com/cli/install', {status: 200, statusText: 'OK'})
      .get('https://giithub.com/Laboratoria/course--parser', {status: '', statusText: 'Not exist'})
      .get('https://es.wikipedia.org/wiki/Markdown', {status: 200, statusText: 'OK'});
    
    mdLinks(path.resolve(`${process.cwd()}\\test`), {validate: true})
      .then(() => {
        expect(validateLink(links)).toEqual(arrObjLinks);
      }).catch((err) => (err));
  });
  it('debe retornar una promesa con el array de objetos de links', () => {
    return mdLinks('test', {})
      .then(res => expect(res).toEqual(links))
      .catch((err) => (err));
  });
});

