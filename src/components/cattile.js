import { useEffect } from "react";

function CatTile({ cat }) {
  return (
    <>
      {cat && (
        <>
          <h2>{cat.name}</h2>
          <img src={cat.url} alt="Picture of cute cat" />q
        </>
      )}
      {!cat && <p>Pick a cute cat</p>}
    </>
  );
}

export default CatTile;
