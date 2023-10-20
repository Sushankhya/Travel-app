import { useState } from "react";
import "./index.css";
import Header from "./Header";
import Form from "./Form";
import Packing from "./Packing";
import Footer from "./Footer";

function App() {
  const [items, setItems] = useState([]);

  function handleNewItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function itemPacked(item_id) {
    setItems((items) =>
      items.map((item) =>
        item.id === item_id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function clearItems() {
    if (window.confirm("Do you want to clear all the items?")) {
      setItems([]);
    }
  }
  return (
    <div className="app">
      <Header />

      <Form handleNewItems={handleNewItems} />
      <Packing
        items={items}
        onDeleteItems={handleDeleteItem}
        itemPacked={itemPacked}
        clearItems={clearItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
