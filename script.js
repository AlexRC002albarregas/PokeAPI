async function getRandomPokemon() {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + getRandomNumber(1, 1008));
        const data = await response.json();

        const pokemonName = data.name;
        const pokemonId = data.id;
        const pokemonImage = data.sprites.front_default;
        const pokemonType = data.types[0].type.name;

        const cardColor = getTypeColor(pokemonType);

        document.getElementById('pokemon-info').style.background = cardColor;
        document.getElementById('pokemon-name').innerText = `${capitalizeFirstLetter(pokemonName)}`;
        document.getElementById('pokemon-id').innerText = `#${pokemonId}`;
        document.getElementById('pokemon-image').src = pokemonImage;
    } catch (error) {
        console.error('Error al obtener el Pokémon:', error);
    }
}

function getTypeColor(type) {
    const typeColors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#bce2f7',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
    };

    return typeColors[type] || '#f0f0f0';
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

window.onload = getRandomPokemon;