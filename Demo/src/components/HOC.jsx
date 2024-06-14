/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
/* eslint-disable react-refresh/only-export-components */
export default function HOC(props) {
  return (
    <>
      <h1>HOC</h1>
      {
        (props.name,
        props.age,
        props.address && (
          <h2>
            My Name is {props.name} , My Age is {props.age} and My City is{" "}
            {props.address},{props.fname}
          </h2>
        ))
      }
    </>
  );
}

const hocFunction = (Component) => {
  return (props) => (
    <div style={{ border: "2px solid black", backgroundColor: "grey" }}>
      <Component {...props} fname="hello" />
    </div>
  );
};
const HOCofSampleComponent = hocFunction(HOC);

export { HOCofSampleComponent };
