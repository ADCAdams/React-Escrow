import React from 'react'
import {connect} from 'react-redux'
import {addContract} from '../actions/addContract'

class NewContractForm extends React.Component {

  state = {
    buyer: '',
    seller: '',
    buyer_addres: '',
    seller_address: '',
    amount: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addContract(this.state)
    this.setState({
      buyer: '',
      seller: '',
      buyer_addres: '',
      seller_address: '',
      amount: ''
    })
  }

  render() {

    return (
      <div>
        <h1>hi</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Buyer: </label>
          <input type='text' placeholder='Buyer Name' value={this.state.name} name="buyer" onChange={this.handleChange}/><br/>
          <label>Buyer Address: </label>
          <input type='text' placeholder='0x8Bd7...' value={this.state.name} name="buyer_address" onChange={this.handleChange}/><br/>
          <label>Seller: </label>
          <input type='text' placeholder='Seller Name' value={this.state.balance} name="seller" onChange={this.handleChange}/><br/>
          <label>Seller Address: </label>
          <input type='text' placeholder='0xe97K...' value={this.state.name} name="seller_address" onChange={this.handleChange}/><br/>
          <label>Amount: </label>
          <input type='text' placeholder='ETH' value={this.state.name} name="amount" onChange={this.handleChange}/><br/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default connect(null, {addContract})(NewContractForm)