const ListComponent = () => {
  const items = [
    {
      name: "Raj",
      age: 25
    },
    {
      name: "Pushpraj",
      age: 20
    }
  ];

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {items.map((item, index) => (
        <ul key={index}>
          <li>Name: {item.name}</li>
          <li>Age: {item.age}</li>
        </ul>
      ))}

      {arr.map((item1, index) => (
        <ul key={index}>
          <li>Number : {item1}</li>
        </ul>
      ))}
    </>
  );
};

export default ListComponent;
