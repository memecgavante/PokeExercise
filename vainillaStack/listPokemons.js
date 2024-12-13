

async function start() {
    const url = 'https://gist.githubusercontent.com/frogfreg/398e6eb310080c8eff749ff605cf3dc5/raw/81e9385842341f51af203ece2e3036966e31c238/pokemon.json';
    const response = await fetch(url)
    const {pokemon} = await response.json();
    if(pokemon) {
        pokemon.forEach(item => {
            const listItem = document.createElement('li')
            const nameItem = document.createElement('p');

            nameItem.innerHTML = item.name;
            listItem.setAttribute('class', 'pokemon-item');

            const pokePhoto = document.createElement('img');
            pokePhoto.src = item.img;
            pokePhoto.setAttribute('class', 'pokephoto');


            listItem.appendChild(pokePhoto);
            listItem.appendChild(nameItem);


            document.getElementById('pokemons-list').appendChild(listItem);
        });
    }
} 
 

start()