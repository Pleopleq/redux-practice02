import React from 'react'
import Pokemon from '../Atoms/Pokemon'

const PokemonCard = ({ name, link, index}) => {
    return (
        <div key ={index}>
            <Pokemon name={name} link={link}></Pokemon>
        </div>
    )
}

export default PokemonCard