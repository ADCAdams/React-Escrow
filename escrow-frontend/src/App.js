import React from 'react';

import ContractsContainer from './containers/ContractsContainer'

class App extends React.Component {

  

  render(){
  return (
    <div className="App">
      <ContractsContainer contracts = {this.props.contracts}/>
    </div>
  );
}
}





export default App;