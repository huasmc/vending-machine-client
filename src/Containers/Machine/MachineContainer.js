import React from 'react';
import InputContainer from '../InputContainer/InputContainer.js'
import DisplayContainer from '../DisplayContainer/DisplayContainer.js'
import axios from 'axios';

class MachineContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "none",
      balance: 0.00,
    }
    this.pushOrder = this.pushOrder.bind(this);
    this.tryOrder = this.tryOrder.bind(this);
}


pushOrder() {
  this.tryOrder();
}

tryOrder() {
  axios.post('http://localhost:4567/order', JSON.stringify({item: this.state.item, balance: this.state.balance}))
 .then((response) => {
   console.log(response);
   this.props.setResponse(response)
 })
 .catch(function (error) {
   console.log(error);
 })
}

updateItem(item) {
    this.setState({
        item: item,
    })
}

updateBalance(balance) {
  this.setState({
    balance: this.state.balance + balance
  })
}


  render() {
    return(
      <div>
        <p className="title">Your choice</p>
      <div className="choice" >{this.state.item}</div>
      <p className="title">Your balance:</p>
      <div className="choice" >{this.state.balance.toFixed(2)}</div>
      <div className="machine">
          <InputContainer updateBalance={this.updateBalance.bind(this)} pushOrder={this.pushOrder.bind(this)} balance={this.state.balance}/>
          <DisplayContainer updateItem={this.updateItem.bind(this)} />

      </div>
    </div>
    )
  }
}

export default MachineContainer;
