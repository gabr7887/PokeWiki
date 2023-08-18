async function fetchAll(url: string) {
const busca = await fetch(url);
const data = await busca.json();
const resultados = Array.from(await data.results);
const pokeurls = [];
resultados.forEach((objeto) => {
  pokeurls.push(objeto.url)
});
console.log(pokeurls);

return await resultados;
}

fetchAll("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");