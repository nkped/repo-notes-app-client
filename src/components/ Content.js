import React from 'react'
import '../App.css'

const  Content = ({ items, setItems, handleCheck, handleDelete }) => {      

return (        
    <ul className='ul'>
        {items.map((item) => (
            <li 
                key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleCheck(item.id)}
                    />
                    <label>{item.item}</label>
                    <button 
                        onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
        ))}
    </ul>
  )
}

export default  Content