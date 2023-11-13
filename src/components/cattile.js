import { useEffect, useState } from "react";

function CatTile({ cat }) {
  const [counter, setCounter] = useState(0);

  function handleCounterClick() {
    setCounter((prev) => prev + 1);
  }

  return (
    <>
      {cat && (
        <>
          <h2>{cat.name}</h2>
          <img
            src={cat.url}
            alt="Picture of cute cat"
            onClick={handleCounterClick}
          />
          <h3>Counter:{counter}</h3>
        </>
      )}
      {!cat && <p>Pick a cute cat</p>}
    </>
  );
}

export default CatTile;
