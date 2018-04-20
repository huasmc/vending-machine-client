import React from 'react';

class CoinsComponent extends React.Component {
  updateBalance(balance) {
    this.props.updateBalance(balance)
  }
  render() {
    return(
      <div className="coins-box">
        <li><p className="coinValue">$0.01<button className="coin bronze" onClick={ () => this.updateBalance(0.01) }></button></p></li>
        <li><p className="coinValue">$0.05<button className="coin silver" onClick={ () => this.updateBalance(0.05) }></button></p></li>
        <li><p className="coinValue">$0.10<button className="coin silver" onClick={ () => this.updateBalance(0.10) }></button></p></li>
        <li><p className="coinValue">$0.25<button className="coin silver" onClick={() => this.updateBalance(0.25) }></button></p></li>
        <li><p className="coinValue">$1.00<button className="coin gold" onClick={ () => this.updateBalance(1.00) }></button></p></li>
      </div>
    );
  }
}


export default CoinsComponent;
