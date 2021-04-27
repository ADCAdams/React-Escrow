import React from 'react'

const Contracts = (props) => {



    return (
        <div>
            Contracts Ledger:
            <br/>
            {props.contracts.map(contract => 
            <ul>
                <li>Buyer - {contract.buyer} - {contract.buyer_address}</li>
                <li>Seller - {contract.seller} - {contract.seller_address}</li>
                <li>Amount - {contract.amount}</li>
            </ul>
            )}
        </div>
            
    )
}

export default Contracts