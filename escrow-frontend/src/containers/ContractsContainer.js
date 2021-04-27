import React from 'react'
import {connect} from 'react-redux'

import {fetchContracts} from '../actions/fetchContracts'
import NewContractForm from '../components/NewContractForm'

import Contracts from '../components/Contracts'

class ContractsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchContracts()
      }
    

    render(){

        return(
            <div>
                <NewContractForm/>
                <Contracts contracts={this.props.contracts}/>

            </div>


        )
    }
}
const mapStateToProps = state => {
    return {
        contracts: state.contracts
    }
  }

export default connect(mapStateToProps, {fetchContracts})(ContractsContainer)