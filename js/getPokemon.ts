interface pokemonResultGeral {
  name: string;
  url: string;
}

interface pokemonInfoGeral {
  id: number;
  name: string;
}

export default class getPokemon{
  url: string;
  
  constructor(Url: string) {
    this.url = Url;
  }

  async getPokeUrls() {
    const busca = await fetch(this.url);
    const data = await busca.json();
    const resultados: pokemonResultGeral[] = Array.from(await data.results);
    console.log(resultados);
    const pokeurls: string[] = [];
    resultados.forEach((objeto :pokemonResultGeral) => {
      pokeurls.push(objeto.url)
    });
    console.log(pokeurls)
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
    for (let i = 0; i < 1010; i++) {
      pokemons.push(await this.finalFetch(pokeurls[i]));
    }
    return pokemons;
  }

  // async getFinalInfo() {
  //   const pokemons = await this.getPokeInfo();
  //   let counter: number = 0;
  //   for () {
  //     let acumulador = 0;

  //   }
  // }
}