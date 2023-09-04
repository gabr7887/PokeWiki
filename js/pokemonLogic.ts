import showPokemon from "./showPokemon.js";

export default class pokemonLogic {
  showPoke: showPokemon;
  scrollValue: number;
  constructor(url: string) {
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