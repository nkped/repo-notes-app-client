import React from 'react'

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
      <label htmlFor='addItem'>Add Item</label>
      <input
          id='addItem'
          autoFocus
          required
          type='text' 
          placeholder='Type item here..'
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          />
      <button 
        type='submit'
        aria-label='Add Item'
      >Save</button>
    </form>
  )
}


export default AddItem