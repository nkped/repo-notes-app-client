import React from 'react'
import Item from './Item'

export const ItemList = ({items, handleCheck, handleDelete}) => {

  return (
    <ul className='ul'>
        {items.map((item) => (            
            <Item 
            item={item}
            handleCheck={handleCheck} 
            handleDelete={handleDelete}/>
        ))}
    </ul>
  )
}
