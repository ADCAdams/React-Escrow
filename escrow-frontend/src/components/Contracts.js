import React from 'react'

const Contracts = (props) => {



    return (
        <div>
            Contracts!!
            {props.contracts.map(contract => 
            <li>Amount - {contract.amount}</li>
            )}
        </div>
            
    )
}

export default Contracts