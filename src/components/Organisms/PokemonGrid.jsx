import React from 'react'
import PokemonCard from '../Molecules/PokemonCard'

const PokemonGrid = () => {
    return (
        <section>
            {/* MAP DE POKEMON CARD */}
            <PokemonCard></PokemonCard>
            <PokemonCard></PokemonCard>
            <PokemonCard></PokemonCard>
            <PokemonCard></PokemonCard>
        </section>
    )
}

export default PokemonGrid