import { useState } from "react";
export default function Packing({
  items,
  onDeleteItems,
  itemPacked,
  clearItems,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  else if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((i) => (
          <li style={{ textDecoration: `${i.packed ? "line-through" : ""}` }}>
            <input
              type="checkbox"
              checked={i.packed}
              onClick={() => itemPacked(i.id)}
            ></input>{" "}
            {i.quantity} {i.description}
            <span>
              {" "}
              <button onClick={() => onDeleteItems(i.id)}>❌</button>
            </span>
          </li>
        ))}
      </ul>
      <div className="action">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value={"description"}> Sort by description</option>
          <option value={"packed"}>Sort by quantity packed status</option>
          <option value={"input"}>Sort by input order</option>
        </select>
        <button onClick={clearItems}>Clear</button>
      </div>
    </div>
  );
}
