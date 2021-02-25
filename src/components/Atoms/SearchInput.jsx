import React from 'react'

const SearchInput = ({ setPokeName, pokeName}) => {
    return (
        <label htmlFor="Pokemon">Pokemon Name:
        <input 
        type="text" 
        placeholder="Pokemon Name"
        value={pokeName}
        onChange={(e) => setPokeName(e.target.value)}
        name="pokemonName">       
        </input>
        </label>
    )
}

export default SearchInput