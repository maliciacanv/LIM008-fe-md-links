import {arrRoutesMd} from '../src/functions/arr.js';

const arrRoutes = [
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\arr.spec.js',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\options.spec.js',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\path.spec.js',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\archivo1.txt',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\archivo2.txt',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\archivo5.md',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\prueba2\\archivo3.md',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\prueba2\\archivo4.md',
];

const arrFilterMd = [
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\archivo5.md',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\prueba2\\archivo3.md',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\prueba2\\archivo4.md',
];


// const link = [
//   { href: 'https://www.draw.io/#',
//     txt: 'marckdaw',
//     file: 'C:Users\\Windows 10\\Desktop.md'
//   },
//   { href: 'https://claseslaboratoria..cslackom/messages/GGB2GPMA8/convo/CE1RMUN2H-1551216478.015400/',
//     txt: 'marckdaw',
//     file: 'C:Users\\Windows 10\\Trueque.md'
//   },
// ];
// const cutLink = [
//   { href: 'https://www.draw.io/#',
//     txt: 'marckdaw',
//     file: 'C:Users\\Windows 10\\Desktop.md'
//   },
//   { href: 'https://claseslaboratoria..cslackom/messages/GGB2GP',
//     txt: 'marckdaw',
//     file: 'C:Users\\Windows 10\\Trueque.md'
//   },
// ];

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
    return expect(extrackLinks(arr)).toBe(link);
  });
});
describe('cutLinks', () => {
  it('deberia ser funcion', () => {
    expect(typeof cutLinks).toBe('function');
  });
  it('recorrer y cortar a 50 caracteres la propiedad href del link   ', () => {
    return expect(cutLinks(link)).toBe(cutLink);
  });
});
*/  
  
