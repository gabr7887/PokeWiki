import showPokemon from "./showPokemon.js";
export default class pokemonLogic {
    showPoke;
    scrollValue;
    constructor(url) {
        this.showPoke = new showPokemon(url);
        this.scrollValue = 0;
        this.onScroll = this.onScroll.bind(this);
    }
    onScroll(event) {
        console.log(event);
        if (this.scrollValue + 1000 < window.scrollY) {
            this.showPoke.criaPoke();
            this.scrollValue = window.scrollY;
        }
        else {
            console.log(`ainda não ${this.scrollValue}`);
        }
        console.log(`window ${window.scrollY}`);
    }
    onInit() {
        this.showPoke.criaPoke();
        addEventListener("scroll", this.onScroll);
    }
}
//# sourceMappingURL=pokemonLogic.js.map