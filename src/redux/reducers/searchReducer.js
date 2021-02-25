import { SET_POKEMONS } from '../actions/type'

const initialState = {
    filter: "",
    filteredPokemons: []
}

export default function searchReducer(state = initialState, {type, payload}) {
    if(type === SET_POKEMONS) {
        return { 
            filteredPokemons: [...state, payload.filter(state.filter)]
        }
    }
    return state
}