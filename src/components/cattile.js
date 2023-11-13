function CatTile({ cat }) {
  return (
    <>
      <h2>Cat tile</h2>
      <p>{cat && cat.name}</p>
    </>
  );
}

export default CatTile;
