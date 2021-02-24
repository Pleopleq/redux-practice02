import React, { useEffect } from 'react'
import { getPokemons } from '../../redux/actions/pokemons'
import PokemonCard from '../Molecules/PokemonCard'
import { useSelector, useDispatch } from 'react-redux';

const PokemonGrid = () => {
    const pokemons = useSelector(state => state.pokemonReducer.pokemons)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getPokemons())
    },[dispatch])

    return (
        <section>
            {pokemons.results?.map((pokemon, index) => (
                    <PokemonCard name={pokemon.name} link={pokemon.url} key={index}></PokemonCard>
                ))}
        </section>
    )
}

export default PokemonGrid