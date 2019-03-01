
/**
  * @function {filtrar la ruta md en un array de objetos}
  * @param {un array de objetos} arr
  * @returns {un array de objetos de las rutas encontradas que no sea un directorio es decir son archivos md}
  */
export const arrRoutesMd = (arr) => {
  const filterMd = arr.filter((element) => {
    return (element.includes('.md'));
  });
  return filterMd;
};

// console.log(arrRoutesMd(openAdirectory('C:\\Users\\Windows 10\\Desktop\\laboratoria proyectos\\marckDow\\LIM008-fe-md-links\\test')));
 
/**
   * @function {recorre arrRoutesMd y extrae los links <a> de la ruta con las propiedades href, text, file}
   * @param {un array de objetos} arr
   * @returns {un array de objetos con los links de los archivos md}
 */
export const extrackLinks = (arr, href, text, file) => {
  

};

/**
 * @function {recorre extrackLinks y recorta a 50 caracteres la propiedad text del link}
 * @param {un array de objetos} arr
 * @returns {un array de objetos con los links} 
 */
export const cutLinks = (arr) => {
};
 