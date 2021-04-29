import React from 'react'
import {Link} from 'react-router-dom'
import '../CSS/contracts.css'
// import Contract from 'Contract'

const Contracts = (props) => {


    return (
        <span>
            Contracts Ledger:
            <br/>
            {props.contracts.map(contract => 
            
            <span key={contract.id} className="one-contract-index-span">
                <Link to={`/contracts/${contract.id}`}>Contract ID: {contract.id}</Link>
                <ul key={contract.id}>
                
                <li key={contract.buyer_address}>Buyer - {contract.buyer} - {contract.buyer_address} </li>
                <li key={contract.seller_address}>Seller - {contract.seller} - {contract.seller_address}</li>
                <li key={contract.amount}>Amount - {contract.amount}</li>
               </ul> 
             </span>
            )}
        </span>
            
    )
}

export default Contracts