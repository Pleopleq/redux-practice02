import { SET_POKEMONS } from './type'

export const setPokemon = (pokemons) => ({
    type: SET_POKEMONS,
    payload: pokemons
})