import React from 'react'
import { useSelector } from 'react-redux';
import PokemonCard from '../Molecules/PokemonCard';

const PokemonGrid = () => {
    const searchResult = useSelector((state) => state.pokemonReducer)
    return (
        <section>
            <h1>Resultado</h1>
            {searchResult.loading && <div>Buscando...</div>}
            {searchResult.pokemon.length >= 1 && 
                <PokemonCard 
                name={searchResult.pokemon[0].name} 
                link={searchResult.pokemon[0].sprites.front_default}>
                </PokemonCard>}
            {searchResult.error !== '' && <span style={{color: 'red'}}>{searchResult.error}</span>}
        </section>
    )
}

export default PokemonGrid