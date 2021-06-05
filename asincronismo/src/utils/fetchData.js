let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// instanciar

const fetchData = (url_api) => {
  return new Promise((resolve, reject) => {
    const xhttp = new XMLHttpRequest(); //Ya no se usa
    xhttp.open("GET", url_api, true); // traer la petición
    xhttp.onreadystatechange = () => {
      // escuchar un elemento
      if (xhttp.readyState === 4) {
        // ternaria
        xhttp.status === 200
          ? resolve(JSON.parse(xhttp.responseText))
          : reject(new Error("Error ", url_api));
      }
    };
    xhttp.send();
  });
};
module.exports = fetchData;
