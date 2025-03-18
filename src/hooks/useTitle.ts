import { useEffect, useState } from 'react';

export const useTitle = (initalTitle: string) => {
  const [title, setTitle] = useState(initalTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector('title');
    // htmlTitle.innerText = title;  -> 타입스크립트는 null일 가능성을 고려하기에 에러
    if (htmlTitle) {
      htmlTitle.innerText = title; // `null` 체크 후 안전하게 값 할당하기
    }
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
