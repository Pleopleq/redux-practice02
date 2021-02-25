import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCESS, FETCH_POKEMON_FAILURE } from './type'

export const fetchPokemonRequest = () => ({
    type: FETCH_POKEMON_REQUEST
})

export const fetchPokemonSuccess = (pokemon) => ({
    type: FETCH_POKEMON_SUCESS,
    payload: pokemon
})

export const fetchPokemonFailure = (error) => ({
    type: FETCH_POKEMON_FAILURE,
    payload: error
})


export const getPokemons = (value) => dispatch => {
    dispatch(fetchPokemonRequest())
    fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
    .then(response => {
        return response.json()
    }).then ((data) => {
        dispatch(fetchPokemonSuccess([data]))
    }).catch(err => {
        dispatch(fetchPokemonFailure('Not found'))
    })
}