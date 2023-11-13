import { useEffect, useState } from "react";

function CatTile({ cat }) {
  const [counter, setCounter] = useState({});
  const [clicked, setClicked] = useState(false);

  function handleCounterClick() {
    setCounter((prev) => {
      return { ...prev, [cat.id]: prev[cat.id] + 1 || 1 };
    });
    setClicked(() => true);
    // console.log("clicked", clicked);
    setTimeout(() => {
      setClicked(() => false);
    }, 500);
  }

  useEffect(() => {
    console.log(clicked);
  }, [clicked]);

  return (
    <>
      {cat && (
        <>
          <h2>{cat.name} is a cat</h2>
          <div className="cat-pic-container">
            <img
              className="cat-pic"
              src={cat.url}
              alt="Picture of cute cat"
              onClick={handleCounterClick}
            />
            <div className={`heart ${clicked ? "clicked" : ""}`}>❤️</div>
          </div>
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
