import showPokemon from "./showPokemon.js";
export default class pokemonLogic {
    showPoke;
    scrollValue;
    constructor(url) {
        this.showPoke = new showPokemon(url);
        this.scrollValue = 0;
        this.onScroll = this.onScroll.bind(this);
    }
    onScroll() {
        if (this.showPoke.livre === true) {
            this.showPoke.criaPoke();
            this.scrollValue = window.scrollY;
        }
    }
    onInit() {
        this.showPoke.criaPoke();
        addEventListener("mousemove", this.onScroll);
        addEventListener("scroll", this.onScroll);
    }
}
//# sourceMappingURL=pokemonLogic.js.map