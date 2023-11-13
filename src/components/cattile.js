import { useEffect, useState } from "react";

function CatTile({ cat }) {
  const [counter, setCounter] = useState({});

  function handleCounterClick() {
    setCounter((prev) => {
      return { ...prev, [cat.id]: prev[cat.id] + 1 || 1 };
    });
  }

  return (
    <>
      {cat && (
        <>
          <h2>{cat.name} is a cat</h2>
          <img
            className="cat-pic"
            src={cat.url}
            alt="Picture of cute cat"
            onClick={handleCounterClick}
          />
          <p>Click pic to add to love counter for {cat.name}^</p>
          <h3>
            Love counter for {cat.name}: {counter[cat.id] || 0}
          </h3>
        </>
      )}
      {!cat && <p>Pick a cute cat</p>}
    </>
  );
}

export default CatTile;
