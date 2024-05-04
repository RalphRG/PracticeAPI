console.log("WORKS");

/* `<section class="card">
<h2 class="name"></h2>
<img src="" alt="pokemon" class="pokemon-img">
</section>`; */

// fetch('https://pokeapi.co/api/v2/pokemon/ditto').then(response => response.json()).then(data => console.log(data)).catch(error => console.error(error));
/* 
fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(response => {
        
if(!response.ok){
    throw new Error(`${name} does not exist`)
}
return response.json();
}).then(data => {console.log(data.name)
    

}).catch(error => console.error(error)); */


async function getPokemon(name){
    try{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

        if(!response.ok){
            throw new Error(`could not find ${name}`);
        }
        const data = response.json();
        const pokemonImage = data.sprites.front_default;
        

    }
    catch(error){
        console.error(error);
    }
}

const searchButton = document.querySelector('.search-pok');

searchButton.addEventListener('click', () => {
    const pokeName = document.getElementById('search').value.toLowerCase();
    getPokemon(pokeName);
})