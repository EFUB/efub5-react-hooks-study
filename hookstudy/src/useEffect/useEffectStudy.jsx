import React, { useEffect, useState } from "react";

export default function useEffectStudy() {
  const sayHello = () => console.log("hello");

  const [number, setNumber] = useState(0);
  const [aNumber, setAnumber] = useState(0);

  useEffect(() => {
    sayHello();
  }, [number]);

  return (
    <div>
      <div>Hi</div>
      <button onClick={() => setNumber(number + 1)}></button>
      <button onClick={() => setAnumber(aNumber + 1)}></button>
    </div>
  );
}
