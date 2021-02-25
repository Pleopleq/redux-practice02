import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { getPokemons } from '../../redux/actions/pokemons';
import SearchInput from '../Atoms/SearchInput'

const SearchForm = () => {
    const [pokeName, setPokeName] = useState('mewtwo')
    const dispatch = useDispatch()

    function onSubmitName(){
        dispatch(getPokemons(pokeName))
    }

    return (
        <>
        <div>
            <SearchInput 
            pokeName={pokeName} 
            setPokeName={setPokeName}
            ></SearchInput>
            <button onClick={onSubmitName} >Submit</button>
        </div>
        </>
    )
}

export default SearchForm