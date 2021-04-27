import React from 'react'
import '../CSS/contracts.css'
// import Contract from 'Contract'

const Contracts = (props) => {

    return (
        <span className="contracts-index-span">
            Contracts Ledger:
            <br/>
            {props.contracts.map(contract => 
            
            <span key={contract.id} className="one-contract-index-span">
                <ul key={contract.id}>
            
                <li>Buyer - {contract.buyer} - {contract.buyer_address} </li>
                <li>Seller - {contract.seller} - {contract.seller_address}</li>
                <li>Amount - {contract.amount}</li>
               </ul> 
             </span>
            )}
        </span>
            
    )
}

export default Contracts