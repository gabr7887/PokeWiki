// async function getPokeUrls(url: string) {
// const busca = await fetch(url);
// const data = await busca.json();
// const resultados = Array.from(await data.results);
// const pokeurls = [];
// resultados.forEach((objeto) => {
//   pokeurls.push(objeto.url)
// });
// return resultados;
// }

// async function getPokeInfo(urls: string[]) {
  
// }

// getPokeUrls("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");


async function getPokeUrls(url: string) {
  const busca = await fetch(url);
  const data = await busca.json();
  const resultados = Array.from(await data.results);
  const pokeurls = [];
  resultados.forEach((objeto) => {
    pokeurls.push(objeto.url)
  });
  const pokeinfos = [];
  for (let i = 0; i <= 1009; i++) {
    fetch(pokeurls[i]).then((resposta) => resposta.json).then((resposta) => {
      pokeinfos.push(resposta);
    })
  }
  console.log(pokeinfos);
  return resultados;
  }
  
  getPokeUrls("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");