import React from 'react'
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


    return (
        <div>

        <ul>
            {items.map((item) => (
                <li>{item.item}</li>
            ))}
        </ul>
        </div>

  )
}

export default  Content