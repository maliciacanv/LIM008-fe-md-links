import {mdLinks} from '../src/view-functions/index.js';
import { validateLink } from '../src/functions/options.js';

const links = [
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

const validate = [ 
  { href: 'https://github.com/markdown-it/markdown-it',
    text: 'markdown-it',
    file:
    `${__dirname}\\testdeprueba\\archivo5.md`,
    status: 200,
    statusText: 'OK' },
  { href:
     'https://developer.mozilla.org/es/docs/Web/JavaScript/Guideeee/Regular_Expressions',
  text: 'expresiones regulares (<code>RegExp</code>)',
  file:
    `${__dirname}\\testdeprueba\\archivo5.md`,
  status: 'Not Found',
  statusText: 'Not Fail' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
    `${__dirname}\\testdeprueba\\prueba2\\archivo3.md`,
    status: 200,
    statusText: 'OK' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
    `${__dirname}\\testdeprueba\\prueba2\\archivo3.md`,
    status: 200,
    statusText: 'OK' },
  { href: 'https://docs.npmjs.com/cli/install',
    text: 'docs oficiales de <code>npm install</code> acá',
    file:
    `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`,
    status: 200,
    statusText: 'OK' },
  { href: 'https://giithub.com/Laboratoria/course--parser',
    text: '<code>course-parser</code>',
    file:
    `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`,
    status: '',
    statusText: 'Not Exist Link' },
  { href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'MarkdownMarkdownMarkdownMarkdownMarkdownMarkdownMa',
    file:
    `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`,
    status: 200,
    statusText: 'OK' }];


const option = {
  validate: false,
  stats: false
};

describe('mdLinks', () => {
  it('debe retornar una promesa con el array de objetos de links', (done) => {
    return mdLinks('C:\\Users\\Windows 10\\Desktop\\laboratoria-proyectos\\marckDow\\LIM008-fe-md-links\\test', {validate: true})
      .then(res => { 
        expect(links).toEqual(res);
        done();
      })
      .catch((err) => err);
  });
  it('debe retornar una promesa con el array de objetos de links', (done) => {
    return mdLinks('test', '')
      .then(res => { 
        expect(links).toEqual(res);
        done();
      })
      .catch((err) => err);
  });
});

