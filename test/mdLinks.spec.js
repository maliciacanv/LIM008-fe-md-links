import {mdLinks} from '../src/view.functions/index.js';


describe('arrRoutesMd', () => {
  it('deberia ser una funcion', () => {
    expect(typeof mdLinks).toBe('function');
  });
  it('debe retornar un array filtrado con las rutas .md', () => {
    mdLinks('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test\\testdeprueba\\prueba2\\archivo3.md', {stats: true})
      .then(res => { 
        expect(mdLinks).toEqual(res);
      })
      .catch((err) => (err));
  });
});

