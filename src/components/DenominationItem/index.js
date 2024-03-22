import React from 'react'

const DenominationItem = ({eachValue, onDenominationClick, value}) => {
  // Destructure value directly (if passed)
  return (
    <li className="list-Container">
      <button
        className="btn-element"
        onClick={() => onDenominationClick(value)} // Use the passed value
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
