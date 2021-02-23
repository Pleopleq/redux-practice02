import React from 'react'
import PokemonCard from '../Molecules/PokemonCard'

const PokemonGrid = () => {
    return (
        <div>
            {/* MAP DE POKEMON CARD */}
            <PokemonCard></PokemonCard>
            <PokemonCard></PokemonCard>
            <PokemonCard></PokemonCard>
            <PokemonCard></PokemonCard>
        </div>
    )
}

export default PokemonGrid