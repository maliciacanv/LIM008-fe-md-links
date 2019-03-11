import { isPathAbsolute, convertPathAabsolute, openAdirectory } from '../functions/path.js';
import { arrRoutesMd, extrackLinks } from '../functions/arr.js';
import { validateLink, totalLinks, uniqueLinks, brokenLinks } from '../functions/options.js';

const option = { 
  stats: false,
  validate: false,
};

export const mdLinks = (route, option) => {
  const routeAbsolute = isPathAbsolute(route);
  let rutaAbsoluta = '';
  if (routeAbsolute === false) {
    rutaAbsoluta = convertPathAabsolute(route);  
  }  
  const arrFiles = openAdirectory(route);
  const arrMd = arrRoutesMd(arrFiles);
  const arrLinks = extrackLinks(arrMd);
  if (option.validate && option.stats) {
    validateLink(arrLinks)
      .then(response => ({
        total: totalLinks(response), unique: uniqueLinks(response), broken: brokenLinks(response)
      }));
  } else if (option.validate) {
    validateLink(arrLinks)
      .then(response => {
        response ;
      });
  } else if (option.stats) {
    validateLink(arrLinks)
      .then(response => ({
        total: totalLinks(response), unique: uniqueLinks(response)
      }));
  } else { 
    arrLinks;
  }
};
  
// mdLinks('test\\testdeprueba\\prueba2\\archivo3.md', '');