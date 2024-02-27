import React, {useState} from 'react';
import Delete from './Delete';
import Update from './Update';

function ItemList({items, deleteItem, updateItem, selectedItemId, setSelectedItemId}) {

  const [editedItem, setEditedItem] = useState({ itemname: "", amount: "" });

  const handleUpdateClick = (id) => {
    setSelectedItemId(id);
    const selectedItem = items.find((item) => item.id === id);
    setEditedItem({ ...selectedItem });
  };

  const handleSaveChanges = () => {
    updateItem(selectedItemId, editedItem.itemname, editedItem.amount);
    setEditedItem({ itemname: '', amount: '' });
    // Clear the selectedItemId after saving changes
    setSelectedItemId(null);
  };

  return (
    <div className='itemsList'>
      <div className='table-items'>
        <table>
          <thead>
            <tr>
              <th>Items</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
                <tr key={item.id} > 
                    <td>{item.itemname}</td>
                    <td>{item.amount}</td>
                    <td>
                      <Delete onClick={() => deleteItem(item.id)}/>
                      <Update onClick={() => handleUpdateClick(item.id)}/>
                    </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>

        {selectedItemId && (
        <div className='edit-item-field'>
          <h3>Edit Item:</h3>
          <input
            type="text"
            placeholder="Enter updated item name"
            value={editedItem.itemname}
            onChange={(e) =>
              setEditedItem({ ...editedItem, itemname: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Enter updated amount"
            value={editedItem.amount}
            onChange={(e) =>
              setEditedItem({ ...editedItem, amount: e.target.value })
            }
          />
          <button className='save-changes' onClick={handleSaveChanges}>Save Changes</button>
        </div>
      )}


    </div>
  )
}

export default ItemList
