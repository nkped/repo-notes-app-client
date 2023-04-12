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

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item );
  setItems(listItems);
}

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id )
  setItems(listItems);        
}


  return (
    <div className="App">
      <Header />      
      <Content 
        items={items} 
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
         />
    </div>
  );
}

export default App;
