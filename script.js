async function getRandomPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRandomNumber(1, 898));
        const data = await response.json();

        const pokemonName = data.name;
        const pokemonId = data.id;
        const pokemonImage = data.sprites.front_default;

        document.getElementById('pokemon-name').innerText = `${capitalizeFirstLetter(pokemonName)}`;
        document.getElementById('pokemon-id').innerText = `#${pokemonId}`;
        document.getElementById('pokemon-image').src = pokemonImage;
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Obtener un Pokémon aleatorio al cargar la página
window.onload = getRandomPokemon;
