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
    for (let i = 0; i < 1010; i++) {
        pokemons.push(await finalFetch(pokeurls[i]));
    }
    return pokemons;
}
async function finalFetch(url) {
    const busca = await fetch(url);
    const data = await busca.json();
    return data;
}
async function criaPoke() {
    const container = document.querySelector(".pokemons");
    const pokemons = await getPokeInfo();
    pokemons.forEach((poke) => {
        const pokeDiv = document.createElement("div");
        pokeDiv.classList.add("pokemon");
        const fotoPoke = document.createElement("img");
        fotoPoke.setAttribute("src", poke.sprites.front_default);
        const pokeName = document.createElement("span");
        pokeName.classList.add("pokename");
        pokeName.textContent = poke.name;
        const pokeId = document.createElement("span");
        pokeId.classList.add("pokeid");
        pokeId.textContent = poke.id;
        const typesDiv = document.createElement("div");
        typesDiv.classList.add("poketipos");
        poke.types.forEach((tipo) => {
            const tipoElement = document.createElement("span");
            tipoElement.classList.add("types", tipo.type.name);
            tipoElement.textContent = tipo.type.name;
            typesDiv.appendChild(tipoElement);
        });
        pokeDiv.appendChild(fotoPoke);
        pokeDiv.appendChild(pokeName);
        pokeDiv.appendChild(pokeId);
        pokeDiv.appendChild(typesDiv);
        container?.appendChild(pokeDiv);
    });
}
criaPoke();
getPokeInfo();
//# sourceMappingURL=script.js.map