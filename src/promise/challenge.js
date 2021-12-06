const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`);
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url);
    })
    .then(data => {
        console.log(data.dimension);
    })
    .catch(err => console.error(err));

/*VENTAJAS: Son facilmente enlazables. Nos permiten trabajar con asincronismo
    DESVENTAJAS: No maneja excepciones, sino que tiene un catch al final.
        Requiere una herramienta como Babel para poder compilar*/