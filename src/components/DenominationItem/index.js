import './index.css'

const DenominationItem = props => {
  const {eachValue} = props
  const {value} = eachValue

  return (
    <li className="list-Container">
      <button className="btn-element">{value}</button>
    </li>
  )
}

export default DenominationItem
