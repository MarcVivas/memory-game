import shuffle from "../utils/shuffle"

export default function Card({pokemons, pokemon, cardsClicked, endGame, record}) {
    function handleCardClick (e) {  
        if(endGame.value.endGame){return;}

        pokemons.set(shuffle(pokemons.value));

        let clonedSet = new Set(cardsClicked.value);
        if(!clonedSet.has(pokemon.name)){
            clonedSet.add(pokemon.name);
            cardsClicked.set(clonedSet);
        }
        else {
            endGame.set({ endGame: true, cause: pokemon })
            return;
        }

        if(clonedSet.size > record.value) {
            record.set(clonedSet.size);
        }

        if(clonedSet.size === pokemons.value.length){
            endGame.set({ endGame: true, cause: "Level passed!"});
        }

    
    }
    
    return (
        <div onClick={handleCardClick} className="card col d-flex flex-column align-items-center justify-content-center" >
            <img width="200px" src={pokemon.sprites.front_default} alt={pokemon.name}/>
            <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
        </div>
    ); 

}