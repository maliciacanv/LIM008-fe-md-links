import { 
  isPathAbsolute, 
  convertPathAabsolute, 
  isAdirectory,
  openAdirectory,
} from '../src/functions/path.js';

// '$(--dirname)`

const arrRoutesFile = [
  `${__dirname}\\arr.spec.js`,
  `${__dirname}\\options.spec.js`,
  `${__dirname}\\path.spec.js`,
  `${__dirname}\\testdeprueba\\archivo1.txt`,
  `${__dirname}\\testdeprueba\\archivo2.txt`,
  `${__dirname}\\testdeprueba\\archivo5.md`,
  `${__dirname}\\testdeprueba\\prueba2\\archivo3.md`,
  `${__dirname}\\testdeprueba\\prueba2\\archivo4.md`,
];


describe('isPhatAbsolute', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isPathAbsolute).toBe('function');
  });
  it('deberia retornar true si es una ruta absoluta', () => {
    return expect(isPathAbsolute(`${__dirname}\\arr.spec.js`)).toBe(true);
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
    return expect(convertPathAabsolute('test\\arr.spec.js')).toBe(`${__dirname}\\arr.spec.js`);
  });
});
describe('isAdirectory', () => {
  it('deberia ser una funcion', () => {
    expect(typeof isAdirectory).toBe('function');
  });
  it('si la ruta ingresada es un directorio, es true', () => {
    expect(isAdirectory(`${__dirname}`)).toBe(true);
  });
  it('si la ruta ingresada es un archivo, es false', () => {
    expect(isAdirectory(`${__dirname}\\arr.spec.js`)).toBe(false);
  });
});
describe('openAdirectory', () => {
  it('deberia ser una funcion', () => {
    expect(typeof openAdirectory).toBe('function');
  });
  // it('si isAdirectory es true devuelve un array con las rutas', () => {
  //   expect(openAdirectory(`${__dirname}`)).toEqual(arrFile);
  // });
  it('si isAdirectory es true devuelve un array con las rutas', () => {
    expect(openAdirectory(`${__dirname}`)).toEqual(arrRoutesFile);
  });
});


