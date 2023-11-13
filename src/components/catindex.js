import CatTile from "./cattile";
import { useState, useEffect } from "react";

function CatIndex() {
  const [cats, setCats] = useState([]);
  const [cat, setCat] = useState(null);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const intId = setInterval(() => setTime((prev) => prev + 1), 1000);
    return () => clearInterval(intId);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/getCatsDB")
      .then((res) => res.json())
      .then((data) => setCats(data))
      .catch((err) => console.log(err));
  }, []);

  function timeFormatter() {
    let min = Math.floor(time / 60);
    let hrs = Math.floor(min / 60);
    let secs = time - 60 * min - 60 * 60 * hrs;
    return `${hrs < 10 ? "0" + String(hrs) : hrs}:${
      min < 10 ? "0" + String(min) : min
    }:${secs < 10 ? "0" + String(secs) : secs}`;
  }

  return (
    <>
      <h1>We have some cats</h1>
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
      <p>It has been {timeFormatter()} since you've refreshed this page!</p>
    </>
  );
}

export default CatIndex;
