export default function Footer({ items }) {
  const numPackedItem = items.filter((item) => item.packed === true).length;
  const percentgePacked = (numPackedItem / items.length) * 100;
  if (items.length === 0) {
    return (
      <footer className="stats">
        Start by adding something in your list ✈️
      </footer>
    );
  }
  return (
    <footer className="stats">
      💼 You have {items.length} items on your list and you have packed{" "}
      {percentgePacked.toFixed(2)}%
    </footer>
  );
}
