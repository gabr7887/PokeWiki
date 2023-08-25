import getPokemon from "./getPokemon.js";

export default class showPokemon{
  url: string;
  pokeinfo: getPokemon;
  container: HTMLElement | null;
  constructor(Url: string) {
    this.url = Url;
    this.pokeinfo = new getPokemon(this.url);
    this.container = document.querySelector(".pokemons");
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

  async criaPoke2() {
    const pokemons = await this.pokeinfo.getPokeInfo();
    let contador: number = 0;
    while (contador < 1009) {
      for (let i = 0; i < 101; i ++) {
        const pokeDiv = document.createElement("div");
        pokeDiv.classList.add("pokemon");
        const fotoPoke = document.createElement("img");
        fotoPoke.setAttribute("src", pokemons[contador].sprites.front_default);
        const pokeName = document.createElement("span");
        pokeName.classList.add("pokename");
        pokeName.textContent = pokemons[contador].name;
        const pokeId = document.createElement("span");
        pokeId.classList.add("pokeid");
        pokeId.textContent = pokemons[contador].id;
        const typesDiv = document.createElement("div");
        typesDiv.classList.add("poketipos");
        pokemons[contador].types.forEach((tipo) => {
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
        contador ++;
      }
      console.log(`sucesso ${contador}`)
    }
  }
}