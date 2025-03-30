import { useRef } from 'react';
type FullscreenElement = HTMLElement & {
  mozRequestFullScreen?: () => void;
  webkitRequestFullscreen?: () => void;
  msRequestFullscreen?: () => void;
};

type FullscreenDocument = Document & {
  mozCancelFullScreen?: () => void;
  webkitExitFullscreen?: () => void;
  msExitFullscreen?: () => void;
};

// * 타입스크립트에서 기본적으로 다음과 같은 비표준 메서드를 존재한다고 인식 못함, 별도로 타입 지정

export const useFullscreen = <T extends HTMLElement = HTMLElement>(
  callback?: (isFull: boolean) => void
) => {
  //* 콜백은 boolean 값을 받아서 실행되는 함수
  const element = useRef<T | null>(null);

  const runCb = (isFull: boolean) => {
    if (callback && typeof callback === 'function') {
      callback(isFull);
    }
  };

  const triggerFull = () => {
    const el = element.current as FullscreenElement;
    if (el) {
      if (el.requestFullscreen) {
        el.requestFullscreen();
      } else if (el.mozRequestFullScreen) {
        el.mozRequestFullScreen();
      } else if (el.webkitRequestFullscreen) {
        el.webkitRequestFullscreen();
      } else if (el.msRequestFullscreen) {
        el.msRequestFullscreen();
      }
      runCb(true);
    }
  };
  const exitFull = () => {
    const doc = document as FullscreenDocument;

    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen();
    } else if (doc.webkitExitFullscreen) {
      doc.webkitExitFullscreen();
    } else if (doc.msExitFullscreen) {
      doc.msExitFullscreen();
    }

    runCb(false);
  };
  return { element, triggerFull, exitFull };
};
