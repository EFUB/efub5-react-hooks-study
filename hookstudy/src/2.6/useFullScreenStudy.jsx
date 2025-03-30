import React, { useRef } from "react";

const useFullScreen = (callback) => {
  const element = useRef();
  const triggerFull = () => {
    if (element.current) {
      element.current.requestFullScreen();
      if (callback && typeof callback === "function") {
        callback(true);
      }
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (callback && typeof callback === "function") {
      callback(false);
    }
  };
  return { element, triggerFull, exitFull };
};

export default function useFullScreenStudy() {
  const onFulls = (isFull) => {
    console.log(isFull ? "we are full" : "we are small");
  };
  const { element, triggerFull, exitFull } = useFullScreen(onFulls);
  return (
    <div>
      <div ref={element}>
        <img src="https://i.pinimg.com/736x/e1/01/54/e1015475f0c040a54de2f2dc3c6134f4.jpg" />
      </div>
      <button onClick={triggerFull}>Make Fullscreen</button>
      <button onClick={exitFull}>Exit Fullscreen</button>
    </div>
  );
}
