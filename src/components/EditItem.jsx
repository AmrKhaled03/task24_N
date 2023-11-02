import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function EditItem({ items, updateItem }) {
  const { id } = useParams();
  const [itemName, setItemName] = useState('');
  const [itemToEdit, setItemToEdit] = useState(null);

  useEffect(() => {
    const item = items.find((item) => item.id === parseInt(id));
    if (item) {
      setItemToEdit(item);
      setItemName(item.name);
    }
  }, [id, items]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemToEdit) return;

    const updatedItem = { ...itemToEdit, name: itemName };
    updateItem(updatedItem);
    window.location.href = '/';
  };

  return (
    <div className='my-5 p-5'>
      <h2>Edit Item</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="itemName">Item Name</label>
          <input
            type="text"
            id="itemName"
            className="form-control"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary m-3">
          Update
        </button>
        <Link to="/" className="btn btn-secondary">
          Cancel
        </Link>
      </form>
    </div>
  );
}

export default EditItem;
