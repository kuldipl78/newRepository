import './index.css'

import {Component} from 'react'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {totalValue: 0}

  onDenominationClick = () => {
    this.setState(prevState => ({
      totalValue: prevState.totalValue + this.State.totalValue,
    }))
  }

  render() {
    const {withdrowAmout} = this.state
    return (
      <div className="main-Continer">
        <div className="withDraw-Container">
          <div className="head-Container">
            <p className="headName"> S</p>
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
            {denominationsList.map(eachValue => (
              <DenominationItem
                key={eachValue.id}
                eachValue={eachValue}
                onDenominationClick={onDenominationClick}
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
