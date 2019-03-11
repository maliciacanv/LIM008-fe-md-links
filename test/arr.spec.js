import {arrRoutesMd,
  extrackLinks } from '../src/functions/arr.js';

const arrRoutes = [
  `${__dirname}\\arr.spec.js`,
  `${__dirname}\\options.spec.js`,
  `${__dirname}\\path.spec.js`,
  `${__dirname}\\testdeprueba\\archivo1.txt`,
  `${__dirname}\\testdeprueba\\archivo2.txt`,
  `${__dirname}\\testdeprueba\\archivo5.md`,
  `${__dirname}\\testdeprueba\\prueba2\\archivo3.md`,
  `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`,
];

const arrFilterMd = [
  `${__dirname}\\testdeprueba\\archivo5.md`,
  `${__dirname}\\testdeprueba\\prueba2\\archivo3.md`,
  `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`,
];

const link = [
  { href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file:
      `${__dirname}\\testdeprueba\\archivo5.md`},
  { href:
       'https://developer.mozilla.org/es/docs/Web/JavaScript/Guideeee/Regular_Expressions',
  text: 'expresiones regulares (<code>RegExp</code>)',
  file:
      `${__dirname}\\testdeprueba\\archivo5.md`},
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
      `${__dirname}\\testdeprueba\\prueba2\\archivo3.md`},
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
         `${__dirname}\\testdeprueba\\prueba2\\archivo3.md`},
   
  { href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de <code>npm install</code> acá',
    file:
      `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`},
  { href: 'https://giithub.com/Laboratoria/course--parser',
    text: '<code>course-parser</code>',
    file:
      `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`},
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
         `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`}
];


describe('arrRoutesMd', () => {
  it('deberia ser una funcion', () => {
    expect(typeof arrRoutesMd).toBe('function');
  });
  it('debe retornar un array filtrado con las rutas .md', () => {
    return expect(arrRoutesMd(arrRoutes)).toEqual(arrFilterMd);
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

