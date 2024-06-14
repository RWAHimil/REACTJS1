import { memo } from "react";

function A({ learn }) {
  console.log("A");

  return <div>A</div>;
}

export default memo(A);
