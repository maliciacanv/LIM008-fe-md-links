import { 
  isPathAbsolute, 
  convertPathAabsolute, 
  isAdirectory,
  openAdirectory,
} from '../src/functions/path.js';

const arrRoutesFile = [
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\arr.spec.js',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\options.spec.js',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\path.spec.js',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\archivo1.txt',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\archivo2.txt',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\archivo5.md',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\prueba2\\archivo3.md',
  'C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\prueba2\\archivo4.md',
];

describe('isPhatAbsolute', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isPathAbsolute).toBe('function');
  });
  it('deberia retornar true si es una ruta absoluta', () => {
    return expect(isPathAbsolute('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\arr.spec.js')).toBe(true);
  });
  it('deberia retornar false si no es una ruta absoluta', () => {
    return expect(isPathAbsolute('test\\arr.spec.js')).toBe(false);
  });
});
describe('convertPathAabsolute', () => {
  it('deberia ser una funcion', () => {
    expect(typeof convertPathAabsolute).toBe('function');
  });
  it('si es ruta relativa, debe convertir en absoluta', () => {
    return expect(convertPathAabsolute('test\\arr.spec.js')).toBe('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\arr.spec.js');
  });
});
describe('isAdirectory', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isAdirectory).toBe('function');
  });
  it('si la ruta ingresada es un directorio, es true', () => {
    expect(isAdirectory('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test')).toBe(true);
  });
  it('si la ruta ingresada es un archivo, es false', () => {
    expect(isAdirectory('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\arr.spec.js')).toBe(false);
  });
});
describe('openAdirectory', () => {
  it('deberia ser una funcion', () => {
    expect(typeof openAdirectory).toBe('function');
  });
  it('si isAdirectory es true devuelve un array con las rutas', () => {
    expect(openAdirectory('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test')).toEqual(arrRoutesFile);
  });
});


