
export function fetchContracts(){
    return (dispatch) =>{
        fetch('http://localhost:3000/contracts')
        .then(response => response.json())
        .then(contracts => dispatch({
            type: 'FETCH_CONTRACTS',
            payload: contracts
        }))
        }
}