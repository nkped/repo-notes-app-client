import React from 'react'

const Item = ({ item, handleCheck, handleDelete }) => {
  return (
    <li key={item.id}>
            <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />
            <label>{item.item}</label>
            <button 
                onClick={() => handleDelete(item.id)}>Delete</button>
    </li>
  )
}

export default Item