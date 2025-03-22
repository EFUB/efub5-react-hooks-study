import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListner("click", onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListner("click".onClick);
      }
    };
  }, []);
  return element;
};
export default function useClickStudy() {
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
}
