import showPokemon from "./showPokemon.js";

export default class pokemonLogic {
  showPoke: showPokemon;
  scrollValue: number;
  constructor(url: string) {
  this.showPoke = new showPokemon(url);
  this.scrollValue = 0;
  }
  
  onScroll(event) {
    console.log(event);
    this.scrollValue += +window.scrollY;
    console.log(`${this.scrollValue}`);
    console.log(`window ${window.scrollY}`);
  }

  onInit() {
    this.showPoke.criaPoke();
    addEventListener("scroll", this.onScroll);
  }
} 