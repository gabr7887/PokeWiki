interface pokemonResultGeral {
  name: string;
  url: string;
}

export default class getPokemon{
  url: string;
  acumulador: number;
  constructor(Url: string) {
    this.url = Url;
    this.acumulador = 0;
  }

  async getPokeUrls() {
    const busca = await fetch(this.url);
    const data = await busca.json();
    const resultados: pokemonResultGeral[] = Array.from(await data.results);
    const pokeurls: string[] = [];
    resultados.forEach((objeto :pokemonResultGeral) => {
      pokeurls.push(objeto.url)
    });
    return pokeurls;
  }

  async finalFetch(url: string) {
    const busca = await fetch(url);
    const data = await busca.json();
    return data;
  }

  async getPokeInfo() {
    const pokeurls: string[] = await this.getPokeUrls();
    const pokemons = [];
    if (this.acumulador < 1010) {
    for (let i = 0; i < 15; i++) {
      pokemons.push(await this.finalFetch(pokeurls[this.acumulador]));
      this.acumulador++;
    }
    return pokemons;
    }
  }
}