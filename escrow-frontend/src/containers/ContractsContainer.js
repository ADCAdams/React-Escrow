import React from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'

import {fetchContracts} from '../actions/fetchContracts'

import NewContractForm from '../components/NewContractForm'
import Contracts from '../components/Contracts'
import NavBar from '../components/NavBar'

class ContractsContainer extends React.Component {

    componentDidMount(){
        this.props.fetchContracts()
      }

    render(){

        return(
            <div className="ContractsContainerClass">
                <NavBar/>
                <Switch>
                    <Route path='/'render={(routerProps) => <Contracts {...routerProps} contracts={this.props.contracts}/>}/>
                    
                    <Route path='/contracts/new' component={NewContractForm}/>
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