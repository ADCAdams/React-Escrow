import React from 'react';
import {connect} from 'react-redux'
import {fetchContracts} from './actions/fetchContracts'

class App extends React.Component {

  componentDidMount(){
  //   fetch('http://localhost:3000/contracts')
  //   .then(response => response.json())
  //   .then(data => console.log(data))
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