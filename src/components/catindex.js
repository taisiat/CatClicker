import CatTile from "./cattile";
import { useState } from "react";

function CatIndex() {
  const [cats, setCats] = useState([
    { name: "Tom", id: 1 },
    { name: "Jerry", id: 2 },
  ]);
  const [cat, setCat] = useState(null);

  return (
    <>
      <h1>Cat Index</h1>
      {cats &&
        cats.map((cat, idx) => {
          return (
            <>
              <a href="#" onClick={() => setCat(cat)} key={idx}>
                {cat.name}
              </a>
              <br />
            </>
          );
        })}
      <CatTile cat={cat} />
    </>
  );
}

export default CatIndex;
