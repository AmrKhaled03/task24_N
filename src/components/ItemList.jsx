import React from 'react';
import { Link } from 'react-router-dom';

function ItemList({ items, deleteItem }) {
  if (items.length === 0) {
    return <p className="mt-4">No items available.</p>;
  }

  return (
    <ul className="list-group mt-4">
      {items.map((item) => (
        <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center m-3">
          {item.name}
          <div>
            <Link to={`/edit/${item.id}`} className="btn btn-sm btn-outline-primary mx-2">
              Edit
            </Link>
            <button
              onClick={() => deleteItem(item.id)}
              className="btn btn-sm btn-outline-danger"
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
