console.log("WORKS");


// show the image and the name
function card  (name, img){
    let cardContainer = document.querySelector('.card-container');
    name = name.substring(0,1).toUpperCase() + name.substring(1);
    cardContainer.innerHTML =`<section class="card">
    <h2 class="pokemon-name">${name}</h2>
    <img src="${img}" alt="pokemon" class="pokemon-sprite">
    </section>`;
};

//Fetching Data
async function getPokemon(name) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

    if (!response.ok) {
      throw new Error(`could not find ${name}`);
    }
    
    const data = await response.json();
    const pokemonImage = data.sprites.front_default;
    card(data.name,pokemonImage);
  } catch (error) {
    console.error(error);
  }
}

const searchButton = document.querySelector(".search-pok");
//when the button is clicked fetch the data
searchButton.addEventListener("click", () => {
  const pokeName = document.getElementById("search").value.toLowerCase();
  getPokemon(pokeName);
});
