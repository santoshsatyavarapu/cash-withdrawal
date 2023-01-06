// Write your code here
import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem/index'

// Write your code here

const denominationsList = [
  {id: 1, value: 50},
  {id: 2, value: 100},
  {id: 3, value: 200},
  {id: 4, value: 500},
]

class CashWithdrawal extends Component {
  state = {cash: 2000}

  cashWithdrawal = value => {
    const {cash} = this.state
    const cashLeft = cash - value
    this.setState({cash: cashLeft})
  }

  render() {
    const {cash} = this.state
    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="profile-card">
            <div className="profile-bg">
              <h1>S</h1>
            </div>
            <p className="heading">Sarah Williams</p>
          </div>
          <div className="balance-card">
            <p className="your-balance">Your Balance</p>
            <div>
              <p className="balance">{cash}</p>
              <p className="rupees">in Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="list-container">
            {denominationsList.map(eachItem => (
              <DenominationItem
                button={eachItem}
                cashWithdrawal={this.cashWithdrawal}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
