import { isPathAbsolute, convertPathAabsolute, openAdirectory } from '../functions/path.js';
import { arrRoutesMd, extrackLinks } from '../functions/arr.js';
import { validateLink} from '../functions/options.js';

export const mdLinks = (route, option) => { 
  return new Promise((resolve, reject) => {  
    if (route === '') {
      reject(route);
    }          
    let rutaAbsoluta = route;
    if (isPathAbsolute(route) === false) {
      rutaAbsoluta = convertPathAabsolute(route);  
    }
    const arrFiles = openAdirectory(rutaAbsoluta);
    const arrMd = arrRoutesMd(arrFiles);
    const arrLinks = extrackLinks(arrMd);
    if (option.validate === true) {
      validateLink(arrLinks)
        .then(response => 
          resolve(response));
    } else { 
      resolve(arrLinks);
    }
  });
};

