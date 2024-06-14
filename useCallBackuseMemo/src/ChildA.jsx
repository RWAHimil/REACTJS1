import { memo } from "react";

function ChildA({ Learning, add }) {
  console.log("ChildA");

  return <div>ChildA</div>;
}

export default memo(ChildA);
