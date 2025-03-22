import { useEffect } from 'react';

export const useBeforeLeave = (onBefore: () => void) => {
  // 부수효과 - 컴포넌트 마운드 /언마운트에 따라 이벤트 리스너 등록 /제거
  useEffect(() => { 
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);

  if (typeof onBefore !== 'function') {
    return;
  }
  const handle = (e: MouseEvent) => {
    const { clientY } = e;
    if (clientY <= 0) {
      onBefore();
    }
  };
};
