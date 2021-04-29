import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchContracts} from '../actions/fetchContracts'

import NewContractForm from '../components/NewContractForm'
import Contracts from '../components/Contracts'
import NavBar from '../components/NavBar'
import Contract from '../components/Contract'

class ContractsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchContracts()
      }

    //   getContractById(id, contracts){
        
    //     return contracts.find(contract => contract.id === id)
       
    //   }

      

    render(){
            console.log(this.props.contracts)
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route path='/contracts/new' component={NewContractForm}/>
                    <Route path='/contracts/:id' render={(routerProps) => <Contract {...routerProps} contracts={this.props.contracts}/>}/>
                    <Route path='/contracts' render={(routerProps) => <Contracts {...routerProps} contracts={this.props.contracts}/>}/>
                </Switch>

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