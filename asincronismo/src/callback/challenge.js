let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// instanciar
let API = "https://rickandmortyapi.com/api/character/";
function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest(); //Ya no se usa
  xhttp.open("GET", url_api, true); // traer la petición
  xhttp.onreadystatechange = function (event) {
    // escuchar un elemento
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        //garantizar
        callback(null, JSON.parse(xhttp.responseText)); // el primer parámetro error
      } else {
        const error = new Error("Error" + url_api);
        return callback(error, null);
      }
    }
  };
  xhttp.send();
}

fetchData(API, function (error1, data1) {
  if (error1) return console.error(error1);
  fetchData(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    });
  });
});
// universales 
// composición un poco tosca, se anida los elementos