import React,{useState} from 'react';

function Form({additem}) {

    const [newItem, setNewItem] = useState("");
    const [newAmount, setNewAmount] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "itemname") {
      setNewItem(value);
    } else if (name === "amount") {
      setNewAmount(value);
    }
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (newItem.trim() !== "") {
      additem(newItem, newAmount);
      setNewItem("");
      setNewAmount("");
    }
  };

  return (
    <div>
      <form>
        <div className='input-text'>
            <input 
            type='text'
            placeholder='Enter item'
            value={newItem}
            name='itemname'
            onChange={handleInputChange}
            />
            <br></br>
            <input
            type='text'
            placeholder='Enter amount'
            value={newAmount}
            name='amount'
            onChange={handleInputChange}
            />
        </div>
        <div className='submit-button'>
            <button type='submit' onClick={handleAddItem}>
                Add
            </button>
        </div>
      </form>
    </div>
  )
}

export default Form
