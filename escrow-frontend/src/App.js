import React from 'react';
import {connect} from 'react-redux'
import {fetchContracts} from './actions/fetchContracts'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchContracts({type: 'FETCH_CONTRACTS'})
  }


  render(){
  return (
    <div className="App">
      app
    </div>
  );
}
}


export default connect(null, {fetchContracts})(App);