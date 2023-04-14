import './App.css';
import Content from './components/ Content';
import Header from './components/Header';
import AddItem from './components/AddItem';
import { useState } from 'react';

function App() {

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

const [ newItem, setNewItem ] = useState('')

const setAndSaveItems = (newItems) => { 
  setItems(newItems);
  localStorage.setItem('shoppinglist', JSON.stringify(newItems))
}


//WORKS! -> console.log(localStorage.shoppinglist)
const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item );
  setAndSaveItems(listItems)
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id )
  setAndSaveItems(listItems)
}

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1
  const myNewItem = { id, checked: false, item }
  const listItems = [ ...items, myNewItem]
  setAndSaveItems(listItems)
}


const handleSubmit = (e) => {
  e.preventDefault()
  addItem(newItem)
  setNewItem('')
}

return (
  <div className="App">
    <Header />
    <AddItem 
      newItem={newItem} 
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}/>
    <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
      handleSubmit={handleSubmit}
        />
  </div>
);
}

export default App;
