import { FETCH_POKEMONS } from './type'

export const setPokemons = (pokemons) => ({
    type: FETCH_POKEMONS,
    payload: pokemons
})

export const getPokemons = () => dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        return response.json()
    }).then(data => {
        return dispatch(setPokemons(data))
    })
    .catch(err => {
        console.error(err)
    })
    
    /* .then(data => {
        return fetch(data.url)
    }).then(response => {
        return dispatch(response.json())
    }). */
}