import { useEffect, useRef } from 'react';

export const useFadeIn = <T extends HTMLElement>(duration = 1, delay = 0) => {
  // *훅을 사용하는 쪽에서 타입을 지정하게하기 위해 제너릭을 씀
  // * 그냥 T만 쓰게 되면 너무 열린 타입
  // * 안전한 사용 범위를 제한하기 위해 extends HTMLElement

  const element = useRef<T | null>(null);
  // if (typeof duration !== 'number' || typeof delay !== 'number')
  // * 이미 타입스크립트가 숫자가 아닌 타입을 막고 있으므로 필요없음
  useEffect(() => {
    const el = element.current;

    if (el) {
      el.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      el.style.opacity = '1';
    }
  });

  return { ref: element, style: { opacity: 0 } };
};
