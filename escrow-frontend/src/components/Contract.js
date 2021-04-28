import React from 'react'

const Contract = (props) => {

    if(props.contract){
        return (
            <div>
     
                {props.contract.buyer_address}
            </div>   
        )
    } else {
        return(
            <div>
                
            </div>
        )
        }
    
}

export default Contract