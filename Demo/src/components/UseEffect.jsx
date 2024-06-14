import { useEffect, useState } from "react";
export default function UseEffect() {
  const [width, setWidth] = useState(window.screen.width);

  const actualWidth = () => {
    console.log(width);

    setWidth(window.innerWidth);
  };

  useEffect(() => {
    console.log("Add Event");

    window.addEventListener("resize", actualWidth);

    return () => {
      console.log("Remove Event");

      window.removeEventListener("resize", actualWidth);
    };
  });

  return (
    <>
      <h2>The Actual Size of Window</h2>
      {width}
    </>
  );
}
