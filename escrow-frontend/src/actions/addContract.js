export const addContract = (data) => {

    return (dispatch) => {
      fetch('http://localhost:3000/contracts', {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(contract => dispatch({type: 'ADD_CONTRACT', payload: contract}))
    }
  
  }