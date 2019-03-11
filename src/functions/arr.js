const path = require('path');
const fs = require('fs');
const myMarked = require('marked');

/**
  * @function {filtrar la ruta md en un array de objetos}
  * @param {un array de objetos} arr
  * @returns {un array de objetos de las rutas encontradas que no sea un directorio es decir son archivos md}
  */
export const arrRoutesMd = (route) => {
  const newArray = [];
  route.forEach((element) => {
    if (path.extname(element) === '.md') {
      return newArray.push(element);
    }
  });
  return newArray;
};
 
/**
   * @function {recorre arrRoutesMd y extrae los links <a> de la ruta con las propiedades href, text, file}
   * @param {un array de objetos} arr
   * @returns {un array de objetos con los links de los archivos md}
 */
export const extrackLinks = (arrPaths) => {
  let arrayLink = [];
  arrPaths.forEach(element => {
    const openFile = fs.readFileSync(element, 'UTF8');
    const renderer = new myMarked.Renderer();
    renderer.link = (href, title, text) => {
      arrayLink.push({href, text: text.slice(0, 50), file: element});
    };
    myMarked(openFile, {renderer});
  });
  return arrayLink;
};
 