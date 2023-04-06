import React from 'react'
import '../App.css'
import { useState } from 'react'

const  Content = () => {
    const [ items, setItems ] = useState([{
        id: 1,
        checked: true,
        item: "Almonds, Unsalted"
    },
    {
        id: 2,
        checked: false,
        item: "Cocoa"
    },
    {
        id: 3,
        checked: false,
        item: "Flouer"
    }])

    
    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
    }
    


    return (
        <div>
            <ul className='ul'>
                {items.map((item) => (
                    <li 
                        key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleCheck(item.id)}
                                checked={item.checked}
                            />
                        <label>{item.item}</label>
            
                    </li>
                ))}
            </ul>
        </div>

  )
}

export default  Content