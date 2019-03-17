import { 
  isPathAbsolute, 
  convertPathAabsolute, 
  isAdirectory,
  openAdirectory,
} from '../src/functions/path.js';

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


describe('isPhatAbsolute', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isPathAbsolute).toBe('function');
  });
  it('deberia retornar true si es una ruta absoluta', () => {
    return expect(isPathAbsolute(path.resolve(`${process.cwd()}\\test\\arr.spec.js`))).toBe(true);
  });
  it('deberia retornar false si no es una ruta absoluta', () => {
    return expect(isPathAbsolute('arr.spec.js')).toBe(false);
  });
});
describe('convertPathAabsolute', () => {
  it('deberia ser una funcion', () => {
    expect(typeof convertPathAabsolute).toBe('function');
  });
  it('si es ruta relativa, debe convertir en absoluta', () => {
    return expect(convertPathAabsolute('test\\arr.spec.js')).toBe(path.resolve(`${process.cwd()}\\test\\arr.spec.js`));
  });
});
describe('isAdirectory', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isAdirectory).toBe('function');
  });
  it('si la ruta ingresada es un directorio, es true', () => {
    expect(isAdirectory(path.resolve(`${process.cwd()}`))).toBe(true);
  });
  it('si la ruta ingresada es un archivo, es false', () => {
    expect(isAdirectory(path.resolve(`${process.cwd()}\\test\\arr.spec.js`))).toBe(false);
  });
});
describe('openAdirectory', () => {
  it('deberia ser una funcion', () => {
    expect(typeof openAdirectory).toBe('function');
  });
  it('si isAdirectory es true devuelve un array con las rutas', () => {
    expect(openAdirectory(path.resolve(`${process.cwd()}\\test`))).toEqual(arrRoutesFile);
  });
  it('si isAdirectory es false devuelve un array con las rutas', () => {
    expect(openAdirectory(`${__filename}`)).toEqual([`${__filename}`]);
  });
});


