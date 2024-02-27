import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './Components/Form';
import ItemList from './Components/ItemList';

function App() {

fetch('http://localhost:5000/api/data')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Handle the retrieved data
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

  const [items, setItems]= useState([]);

  const [selectedItemId, setSelectedItemId] = useState(null);

  const additem = (itemname, amount)=>{
    const newitem={
      id: Date.now(),
      itemname,
      amount,
    };
    setItems([...items,newitem]);
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };


  const updateItem = (id, updatedName, updatedAmount) => {
    // Check if updatedName and updatedAmount are provided
    if (updatedName !== undefined && updatedAmount !== undefined) {
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id
            ? { ...item, itemname: updatedName, amount: updatedAmount }
            : item
        )
      );
      setSelectedItemId(null);
    }
  };

  return (
    <div className="App">

      <div className="Title">
        <h1>Perform CRUD Operations!</h1>
      </div>
      <div className="Form">
        <Form additem={additem}></Form>
      </div>
      <div className="list-of-items">
        <ItemList items={items} deleteItem={deleteItem} updateItem={updateItem} selectedItemId={selectedItemId} setSelectedItemId={setSelectedItemId}/>
      </div>
    </div>
  );
}

export default App;
