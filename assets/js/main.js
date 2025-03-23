function convertPokemonHtml(pokemon) {
  return `
  <li class="pokemon">
    <span class="number">#001</span>
    <span class="name">${pokemon.name}</span>
    <div class="detail">
      <ol class="types">
        <li class="type">Grass</li>
        <li class="type">Poison</li>
      </ol>
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
        alt="${pokemon.name}"
      />
    </div>
  </li>`;
}

const pokemonList = document.querySelector("#pokemonList");

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonList.innerHTML += pokemons.map(convertPokemonHtml).join("");
});
// .then() => tentar executar algo.
// .catch() => se der erro cai nele.
// .finally => executa sempre.
// Readable Stream => O Fetch sempre retorna uma stream de dados.
// .json() => converte nosso objeto em json.
