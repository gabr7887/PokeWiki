export default class getPokemon {
    url;
    acumulador;
    constructor(Url) {
        this.url = Url;
        this.acumulador = 0;
    }
    async getPokeUrls() {
        const busca = await fetch(this.url);
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
    async finalFetch(url) {
        const busca = await fetch(url);
        const data = await busca.json();
        return data;
    }
    async getPokeInfo() {
        const pokeurls = await this.getPokeUrls();
        const pokemons = [];
        for (let i = 0; i < 14; i++) {
            pokemons.push(await this.finalFetch(pokeurls[this.acumulador]));
            this.acumulador++;
        }
        return pokemons;
    }
}
//# sourceMappingURL=getPokemon.js.map