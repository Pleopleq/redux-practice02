import { FETCH_POKEMON_REQUEST, FETCH_POKEMON_SUCESS, FETCH_POKEMON_FAILURE } from '../actions/type'

const initialState = {
    loading: false,
    pokemon: [],
    error: ''
}

export default function pokemonReducer(state = initialState, { type, payload }){
    switch (type) {
        case FETCH_POKEMON_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_POKEMON_SUCESS:
            console.log(payload)
            return {
                loading: false,
                pokemon: payload,
                error: ''
            }
        case FETCH_POKEMON_FAILURE:
            return {
                loading: false,
                pokemon: [],
                error: payload
            }
        default: return state;
    }
}