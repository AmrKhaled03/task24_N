import React , {useEffect,useState} from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Dashboard from "./components/Dashboard";

import EditItem from "./components/EditItem";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";

function App() {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState('');

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    setItems(storedItems);
  }, []);

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const addItem = () => {
    if (newItemName.trim() === '') {
      return; // Do not add an empty item
    }

    const newItem = {
      id: Date.now(),
      name: newItemName,
    };

    setItems([...items, newItem]);
    setNewItemName('');

    localStorage.setItem('items', JSON.stringify([...items, newItem]));
  };

  const updateItem = (updatedItem) => {
    const updatedItems = items.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );

    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };


  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          
          <div className="row">
            <main className="col-md-9 ml-sm-auto col-lg-10 px-4">
              <Routes>
               
                      <Route index path="/" element={<Dashboard  deleteItem={deleteItem} addItem={addItem} newItemName={newItemName} items={items} setNewItemName={setNewItemName}/>} />
                      <Route path="/add" element={<UserForm  addItem={addItem} newItemName={newItemName } setNewItemName={setNewItemName}  />} />
                      <Route path="/edit/:id" element={<EditItem  updateItem={updateItem} items={items}  />} />
                   
                
              </Routes>
            </main>
          </div>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
