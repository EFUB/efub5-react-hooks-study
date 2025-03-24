import { useEffect, useRef, RefObject } from 'react';
export const useHover = (
  onHover?: (event: MouseEvent) => void // onHOver는 MouseEvent를 매개변수 
): RefObject<HTMLElement | null> => { // 반환타입 타입 명시 
  const element = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!onHover || typeof onHover !== 'function') return;

    const el = element.current;
    if (el) {
      el.addEventListener('mouseenter', onHover);
    }

    return () => {
      if (el) {
        el.removeEventListener('mouseenter', onHover);
      }
    };
  }, []);

  return element;
};
