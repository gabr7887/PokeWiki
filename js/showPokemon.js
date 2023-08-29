import getPokemon from "./getPokemon.js";
export default class showPokemon {
    pokeinfo;
    container;
    constructor(Url) {
        this.container = document.querySelector(".pokemons");
        this.pokeinfo = new getPokemon(Url);
    }
    async criaPoke() {
        const pokemons = await this.pokeinfo.getPokeInfo();
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
            this.container?.appendChild(pokeDiv);
        });
    }
}
//# sourceMappingURL=showPokemon.js.map