const fetch = require('node-fetch');
/**
 * @function {validar} validateLink
 * @param {un array de objetos} arr
 * @returns {un array de objetos con los links validades con propiedades satus, statusText} 
 */
export const validateLink = (arr) => {
  const linkValidate = arr.map(links => new Promise((resolve, reject) => {
    return fetch(links.href)                                       
      .then(response => {
        if (response.status >= 200 && response.status < 400) {
          links.status = response.status;
          links.statusText = response.statusText;
          resolve(links); 
        } else {
          links.status = response.statusText;
          links.statusText = 'Not Fail';
          resolve(links);
        }
      }).catch(() => { 
        links.status = '';
        links.statusText = 'Not Link';
        resolve(links);
      });
  }));
  return Promise.all(linkValidate);
};

/** 
 * @function {uniqueLinks} 
 * @param {un array de objetos} arr
 * @returns {la cantidad de los links unicos } 
 */
export const uniqueLinks = (arr) => { 
  const unique = [...new Set(arr.map((link) => link.href))];
  return unique.length;
};
/**
 * @function {totalLinks} 
 * @param {un array de objetos} arr
 * @returns {la cantidad de los links totales} 
 */
export const totalLinks = (arr) => { 
  const total = arr.length;
  return total;
};

/**
 * @function {brokenLinks} 
 * @param {un array de objetos} arr
 * @returns {la cantidad de los links rotos} 
 */
export const brokenLinks = (arr) => {
  const broken = arr.filter(link => link.status === '' || link.status === 'Not Found');
  return broken.length;
};


