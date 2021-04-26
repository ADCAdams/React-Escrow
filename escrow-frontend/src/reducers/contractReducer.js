export default function contractReducer(state = {contracts: []}, action){
    debugger;
    switch (action.type) {
        case 'FETCH_ACCOUNTS':

          return {contracts: action.payload}
        default:
            return state
    }

}