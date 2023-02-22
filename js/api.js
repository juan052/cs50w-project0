const baseUrl = `https://pokeapi.co/api/v2/pokemon/`;
const pokemon = document.getElementById('pokemonName');
const buttonPokemon = document.getElementById('searchPokemon');
const buttonClear = document.getElementById('clearPokemon');
const appNode = document.getElementById('app');

buttonPokemon.addEventListener('click', insertPokemon);
buttonPokemon.addEventListener('touchstart', insertPokemon); //*Para celulares

buttonClear.addEventListener('click', deletePokemons);
buttonClear.addEventListener('touchstart', deletePokemons); //* Para celulares
async function insertPokemon() {
    try {
        const res = await fetch(`${baseUrl}${pokemon.value.toLocaleLowerCase()}`)
        const pokemonDataJSON = await res.json()
    
        const allItems = [];
        const result = []; //*Guardaremos la respuesta en el array
    
        for (let pokemonInfo in pokemonDataJSON) { //*Convertimos el objeto JSON a array
          result.push([pokemonInfo , pokemonDataJSON[pokemonInfo]]);
        }
    
        console.table(result); //! only for development
    
        //* Información de en frente
    
        //*Crear imagen
        const pokemonImage = document.createElement('img');
        pokemonImage.src = result[14][1].front_default; //*Imagen de pokemon
    
        //*Nombre de pokemon e ID
        const pokemonName = document.createElement('h2');
        pokemonName.innerText = `Nombre: ${result[10][1]} - ID: ${result[6][1]}`; //* Nombre y id del pokemon
    
        //*Tipo de pokemon
        const pokemonType = document.createElement('h2');
        pokemonType.innerText = `Tipo: ${result[16][1][0].type.name}`; //*Tipo de pokemon
    
        //* Pokemon HP
        const hp = document.createElement('p');
        hp.innerText = `HP: ${result[15][1][0].base_stat}`; //*HP de pokemon
        hp.classList.add('pokemonStats');
    
        //* Attack power
        const attack = document.createElement('p');
        attack.innerText = `Ataque: ${result[15][1][1].base_stat}`; //* Pode de ataque
        attack.classList.add('pokemonStats');
    
        //* Defense
        const defense = document.createElement('p');
        defense.innerText = `Defensa: ${result[15][1][2].base_stat}`; //* Pokemon defensa
        defense.classList.add('pokemonStats');
    
        //* Special Attack
        const specialAttack = document.createElement('p');
        specialAttack.innerText = `Ataque especial: ${result[15][1][3].base_stat}`; //* Pokemon ataque especial
        specialAttack.classList.add('pokemonStats');
    
        //* Special Defense
        const specialDefense = document.createElement('p');
        specialDefense.innerText = `Defensa especial: ${result[15][1][4].base_stat}`; //* Pokemon defensa especial
        specialDefense.classList.add('pokemonStats');
    
        //* Speed
        const speed = document.createElement('p');
        speed.innerText = `Speed: ${result[15][1][5].base_stat}`; //* Pokemon ataque especial
    
        //* Contenerdor de stats
        const stats = document.createElement('div');
        stats.append(hp, attack, defense, specialAttack, specialDefense, speed);
        stats.classList.add('pokemonStatsContainer');
    
        //*Crear contenedor
        const container = document.createElement('div');
        container.append(pokemonImage , pokemonName ,pokemonType, stats);
        container.classList.add('container');
    
        allItems.push(container);
    
        appNode.append(...allItems);
    } catch (error) {
        alert("Ese Pokémon no está disponible. Intente de nuevo con otro.");
    }
}
function deletePokemons() {
    let allPokemon = appNode.childNodes;
    allPokemon = Array.from(allPokemon);

    allPokemon.forEach(pokemon => {
        pokemon.remove(pokemon);
    });
}