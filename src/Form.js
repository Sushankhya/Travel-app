import { useState } from "react";
export default function Form({ handleNewItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { id: Date.now(), description, quantity, packed: false };
    handleNewItems(newItem);
  }

  function handleItem(e) {
    setDescription(e.target.value);
  }

  function handleQuantity(e) {
    setQuantity(e.target.value);
  }

  return (
    <div>
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need 😍 for your trip?</h3>
        <select onChange={(e) => handleQuantity(e)}>
          {" "}
          {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
            <option>{i}</option>
          ))}
        </select>
        <input placeholder="Item..." onChange={(e) => handleItem(e)}></input>
        <button>Add</button>
      </form>
    </div>
  );
}
