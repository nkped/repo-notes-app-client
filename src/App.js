import './App.css';
import Content from './components/ Content';
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

  return (
    <div className="App">
      <header></header>
       <Content 
       items={items} 
       setItems={setItems} />
    </div>
  );
}

export default App;
