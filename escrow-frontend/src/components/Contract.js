import React from 'react'

const Contract = (props) => {



    return (
        <div>
            Contracts!!
            {props.contracts.map(contract => 
            <li>Buyer - {contract.buyer_address}</li>

            )}
        </div>
            
    )
}

export default Contracts