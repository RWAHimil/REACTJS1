import { useState } from "react";
import styles from "./Demo.module.css";

export default function AgeValidation() {
  // eslint-disable-next-line no-unused-vars
  const [age, setAge] = useState(false);

  // if else condition
  // if (age) {
  //   return <div>You Can Vote</div>;
  // } else {
  //   return <div>You Cannot Vote</div>;
  // }

  // element variables
  // let a;
  // if (age) {
  //   a = <div>You can Vote</div>;
  // } else {
  //   a = <div>You cannot Vote</div>;
  // }

  // return <>{a}</>;

  // ternary operator
  // return <>{age ? <div>You can Vote</div> : <div>You cannot Vote</div>}</>;

  // short circuit operator
  return (
    <>
      {age && <div>You can Vote</div>}

      <h1 className={styles.h1}>AgeValidation Component</h1>
    </>
  );
}
