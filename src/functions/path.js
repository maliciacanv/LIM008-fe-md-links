const path = require('path');
const fs = require('fs');
/**
* @function {para saber si es una ruta absoluta}
* @param {ruta que va ser ingresada es una acdena de string} path 
* @returns {retorna un valor boleano}
*/

export const isPathAbsolute = (route) => {
  const isAbsolute = path.isAbsolute(route);
  return isAbsolute;
};

/**
 * @function {para convertir una ruta relativa a una ruta absoluta}
 * @param {ruta, es una cadena de string} path
 * @returns {retorna una cadena de string}
 */
export const convertPathAabsolute = (route) => {  
  const pathAbsolute = path.resolve(route);
  return pathAbsolute;
};

/**
 * @function {pregunta si es una directorio}
 * @param {la ruta ingresada} path
 * @returns {boleano, true si es verdadero y false si es falso}
 */
export const isAdirectory = (route) => {
  const pathIsDirectory = fs.statSync(route).isDirectory();
  return pathIsDirectory;
};

/**
 * @function {si isAdirectory es true, recorre directorio y devuelve un array de rutas de archivos} funcion recursiva
 * @param {ruta} path
 * @returns {string}
 */
 export const openAdirectory = (route) => {
  let arrRoutesFiles = [];
  const file = fs.readdirSync(route);
  file.forEach((element) => {
    const directoryChild = path.join(route, element);
    const stats = fs.lstatSync(directoryChild);
    if (stats.isDirectory()) {
      arrRoutesFiles = arrRoutesFiles.concat(openAdirectory(directoryChild));
    } else if (stats.isFile()) { 
      arrRoutesFiles.push(directoryChild);
    }
  });
  return arrRoutesFiles;
};

//openAdirectory('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test');

//  const arrRoutesMd = (arr) => {
//   const filterMd = arr.filter((element) => {
//     return (element.includes('.md'));
//   });
//   return filterMd;
// };

// console.log(arrRoutesMd(openAdirectory('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test')));
