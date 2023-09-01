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
        const pokeurls = [];
        resultados.forEach((objeto) => {
            pokeurls.push(objeto.url);
        });
        console.log("fez o fetch");
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
        if (this.acumulador < 1010) {
            for (let i = 0; i < 15; i++) {
                pokemons.push(await this.finalFetch(pokeurls[this.acumulador]));
                this.acumulador++;
            }
            return pokemons;
        }
        else {
            return ("fetch finalizado");
        }
    }
}
//# sourceMappingURL=getPokemon.js.map