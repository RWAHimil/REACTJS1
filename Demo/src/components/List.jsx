export default function List() {
  const list = [
    "Thor",
    "Captain America",
    "Iron Man",
    "Dr Strange",
    "Iron Man"
  ];

  const style = {
    color: "blue"
  };

  const result = list.map((value, index) => (
    <h2 key={index}>
      {value} index is {index}
    </h2>
  ));
  return (
    <>
      {result}
      <h1 style={style}>Hello</h1>
      <h2 style={{ backgroundColor: "green" }}>World !!</h2>
    </>
  );
}
