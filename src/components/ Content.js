import React from 'react'
import '../App.css'
import ItemList from './ItemList'

const  Content = ({ items, handleCheck, handleDelete }) => {      

return (
    <ItemList 
        items={items} 
        handleCheck={handleCheck} 
        handleDelete={handleDelete}
    />

  )
}

export default  Content