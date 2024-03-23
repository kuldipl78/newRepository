import React from 'react'

const DenominationItem = ({onDenominationClick, value}) => {
  
  return (
    <li className="list-Container">
      <button
        className="btn-element"
        onClick={() => onDenominationClick(value)}
      >
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
