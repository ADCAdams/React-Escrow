import React from 'react'

const Contract = ({match, contracts}) => {


    let contract = contracts.find(contract => contract.id === parseInt(match.params.id))
    debugger;

    
    if(contract){
        return (

                <span key={contract.id} className="one-contract-index-span">
                    Contract ID: {contract.id}
                <ul key={contract.id}>
            
                <li key={contract.buyer_address}>Buyer - {contract.buyer} - {contract.buyer_address} </li>
                <li key={contract.seller_address}>Seller - {contract.seller} - {contract.seller_address}</li>
                <li key={contract.amount}>Amount - {contract.amount}</li>
               </ul> 
             </span>
 
        )
    } else {
        return(
            <div>
                Could not find contract
            </div>
        )
        }
    
}

export default Contract