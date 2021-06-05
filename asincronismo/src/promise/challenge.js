const fetchData = require("../utils/fetchData");
const API = "https://rickandmortyapi.com/api/character/";

// hacer nuestras peticiones

fetchData(API).then((data) => {
  console.log(data.info.count);
  return fetchData(`${API}${data.results[0].id}`);
})
//primer llamado
.then(data=>{
    console.log(data.name);
    return fetchData(data.origin.url)
})
.then(data=>{
    console.log(data.dimension);
})
.catch(err=>console.error(err))
// se debe retonnar el siguiente llamado
// transpilar esta herramienta como babel