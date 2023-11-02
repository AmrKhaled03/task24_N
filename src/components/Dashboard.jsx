import React from 'react';
import { Link } from 'react-router-dom';
import ItemList from './ItemList';

function Dashboard({ items, deleteItem }) {
  return (
    <div className='my-5 p-5 '>
      <h2>DASHBOARD</h2>
      <Link to="/add" className="btn btn-primary">
        Add Item
      </Link>
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default Dashboard;
