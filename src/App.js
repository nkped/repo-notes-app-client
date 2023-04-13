import './App.css';
import Content from './components/ Content';
import Header from './components/Header';
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



//WORKS! -> console.log(localStorage.shoppinglist)
const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item );
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems))
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id )
  setItems(listItems);
  localStorage.setItem('shoppinglist', JSON.stringify(listItems))
}


return (
  <div className="App">
    <Header />      
    <Content 
      items={items}
      handleCheck={handleCheck}
      handleDelete={handleDelete}
        />
  </div>
);
}

export default App;
