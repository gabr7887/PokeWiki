import showPokemon from "./showPokemon.js";
import getPokemon from "./getPokemon.js";

const ativ = new showPokemon("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
//const busca = new getPokemon("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
//busca.getPokeInfo();
ativ.criaPoke2();