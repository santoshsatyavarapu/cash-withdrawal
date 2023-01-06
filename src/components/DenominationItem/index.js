// Write your code here

import './index.css'

const DenominationItem = props => {
  const {button, cashWithdrawal} = props
  const {value} = button

  const onWithdrawal = () => {
    cashWithdrawal(value)
  }

  return (
    <li className="list-item-container">
      <button className="button" onClick={onWithdrawal} type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
