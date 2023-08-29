import pokemonLogic from "./pokemonLogic.js";

const poke = new pokemonLogic("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
poke.onInit();
console.log(poke.scrollValue);