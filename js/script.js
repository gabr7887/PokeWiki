"use strict";
async function getPokeUrls(url) {
    const busca = await fetch(url);
    const data = await busca.json();
    const resultados = Array.from(await data.results);
    console.log(resultados);
    const pokeurls = [];
    resultados.forEach((objeto) => {
        pokeurls.push(objeto.url);
    });
    console.log(pokeurls);
    return pokeurls;
}
async function getPokeInfo() {
    const pokeurls = await getPokeUrls("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
    const pokemons = [];
    await pokeurls.forEach((url) => {
        const busca = fetch(url);
        const data = busca.json();
        pokemons.push(data);
    });
    console.log(pokemons);
}
getPokeInfo();
//# sourceMappingURL=script.js.map