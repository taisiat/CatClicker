import CatTile from "./cattile";
import { useState, useEffect } from "react";

function CatIndex() {
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/getCats")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>Cat Index</h1>
      {cats &&
        cats.map((cat, idx) => {
          return (
            <>
              <ul>
                <li className="cat-name" onClick={() => setCat(cat)} key={idx}>
                  {cat.name}
                </li>
              </ul>
            </>
          );
        })}
      <CatTile cat={cat} />
    </>
  );
}

export default CatIndex;
