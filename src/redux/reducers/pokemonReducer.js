import { FETCH_POKEMONS } from '../actions/type'

const initialState = {
    pokemons: []
}

export default function pokemonReducer(state = initialState, { type, payload }){

    if(type === FETCH_POKEMONS){
        return {
            ...state,
            pokemons: payload
        } 
    }
    return state
}