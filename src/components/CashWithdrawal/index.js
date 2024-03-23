import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {totalValue: 0}

  onDenominationClick = value => {
    this.setState(prevState => ({
      totalValue: prevState.totalValue + value,
    }))
  }

  render() {
    const {withdrowAmout} = this.props
    return (
      <div className="main-Continer">
        <div className="withDraw-Container">
          <div className="head-Container">
            <h1 className="headName"> S</h1>
            <p className="name"> Sarah Williams </p>
          </div>
          <div className="balance-container">
            <p>Your Balance</p>
            <div className="balance-section">
              <p className="total-Amount">{withdrowAmout}</p>
              <p className="amount-In-Rupees"> In Rupees </p>
            </div>
          </div>
          <div className="cashWithDrow-Container">
            <h1 className="heading"> Withdraw </h1>
            <p className="description"> CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="values-Continer">
            {this.props.denominationsList.map(eachValue => (
              <DenominationItem
                key={eachValue.id}
                onDenominationClick={this.onDenominationClick}
                value={eachValue.value}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
