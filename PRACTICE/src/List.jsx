function List() {
  const arr = ["Raj", "Pushpraj", "Mayur", "Mehul"];
  return (
    <>
      {/* <ul> */}
      {arr.map((ele, i) => (
        <li key={i}>{ele}</li>
      ))}
      {/* </ul> */}
    </>
  );
}

export default List;
