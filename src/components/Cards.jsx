import generateRandom from "../utils/random";
import Card from "./Card";
import { useState, useEffect } from "react";
export default function Cards ({endGame, record, newGame, cardsClicked}) {
    const [pokemons, setPokemons] = useState([]);

    // Get cards
    useEffect(() => {
        const fetchData = async () => {
            let pokemonList = [];
            let pokemonIds = new Set();

            for (let i = 0; i < newGame.value.cardNumber; i++) {
                
                let pokemonId = generateRandom(1, 1000);
                while(pokemonIds.has(pokemonId)){
                    pokemonId = generateRandom(1, 1000);
                }
                pokemonIds.add(pokemonId);

                

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data = await response.json();
        
                pokemonList.push(data);
            }
        
            setPokemons(pokemonList);
        }
        fetchData();

    }, [newGame.value]);

    
    const pokemonCards = pokemons.map(pokemon => {
        return <Card record={record} key={pokemon.id} pokemons={{value:pokemons, set:setPokemons}} pokemon={pokemon} cardsClicked={cardsClicked} endGame={endGame} />
    });

    return (
        <div className="container">
                <div className="row gap-4 justify-content-center">{pokemonCards}</div>
        </div>
    );
}