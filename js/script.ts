interface pokemonResultGeral {
  name: string;
  url: string;
}

interface pokemonInfoGeral {
  id: number;
  name: string;
}

async function getPokeUrls(url: string) {
const busca = await fetch(url);
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

async function getPokeInfo() {
  const pokeurls: string[] = await getPokeUrls("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
  const pokemons = [] 
  await pokeurls.forEach((url: string) => {
   const busca = fetch(url);
   const data =  busca.json();
   pokemons.push(data);
  });
  console.log(pokemons);
}

getPokeInfo();