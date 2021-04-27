//import React from 'react'

export default function contractReducer(state = {contracts: []}, action){
  
    switch (action.type) {
        case 'FETCH_CONTRACTS':

          return {contracts: action.payload}

        case 'ADD_CONTRACT':
          return {...state, contracts: [...state.contracts, action.payload]}
        default:
            return state
    }

}