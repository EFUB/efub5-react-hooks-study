import { useEffect, useRef } from 'react';

export const useClick = (onClick: () => void) => {
  const element = useRef<HTMLHeadingElement | null>(null);
  //* useRef:  document.getElementByID와 같이 컴포넌트의 어떤 부분을 선택할 수 있게 함
  //* 현재는 UseClick 페이지에서 h1을 활용하고 있어서 타입을 HTMLHeadingElement로 지정해야함
  useEffect(() => {
    const el = element.current;
    if (el) {
      el.addEventListener('click', onClick);
    }
    //* h1 태그가 마운트된 이후에 이벤트를 추가해야하므로
    return () => {
      // if (element.current) {
      //   element.current.removeEventListener('click', onClick);
      // }
      if (el) {
        el.removeEventListener('click', onClick);
      }
    };
  }, []);
  //* dependency 배열이 없다면 컴포넌트가 리렌더링 될때마다 실행되므로 필요

  return element;
};

//* useRef는 DOM 요소에 직접 접근할 때 사용됨
//*useEffect는 컴포넌트가 렌더링될 때 실행되는 코드를 작성할 때 사용됨
