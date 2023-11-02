import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
const UserForm = ({ addItem, newItemName, setNewItemName })  => {

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem();
    window.location.href = '/';
  };

  return (
    <div className="my-5 p-5">
    <h2>Add Item</h2>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Item Name</Form.Label>
        <Form.Control
          type="text"
          id="itemName"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
        />
      </Form.Group>
      <Button type="submit" variant="primary" className="m-3">
        Add
      </Button>
      <Link to="/" className="btn btn-secondary ml-2">
        Cancel
      </Link>
    </Form>
  </div>
  );
}
export default UserForm;
