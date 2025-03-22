import React, { useEffect } from "react";
const useBefeoreLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }

    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};

export default function usePageLeave() {
  const beforeLife = () => console.log("Pls dont leave");
  useBefeoreLeave(beforeLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
