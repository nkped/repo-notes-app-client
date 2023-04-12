import React from 'react'
import '../App.css'

const  Content = ({ items, setItems }) => {
       
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item );
        setItems(listItems);
    }
    
    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id )
        setItems(listItems);        
    }


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
                            onClick={() => handleDelete(item.id)
                            }>Delete</button>
                </li>
            ))}
        </ul>
  )
}

export default  Content