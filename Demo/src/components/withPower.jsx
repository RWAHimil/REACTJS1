/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
const withPower = (WComponent) => {
  const HOCFun = (props) => {
    console.log(props);

    return (
      <div style={{ backgroundColor: "red" }}>
        <WComponent name="Himil" {...props} />
      </div>
    );
  };
  return HOCFun;
};
export default withPower;
