/* eslint-disable react/prop-types */
import withPower from "./withPower";

// eslint-disable-next-line react-refresh/only-export-components
function Home(props) {
  console.log(props);

  return <>Home {props.name}</>;
}

// eslint-disable-next-line react-refresh/only-export-components
export default withPower(Home);
