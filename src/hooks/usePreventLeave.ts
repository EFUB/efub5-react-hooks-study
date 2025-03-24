export const usePreventLeave = () => {
  const listener = (e: BeforeUnloadEvent) => {
    // 타입스크립트가 지원하는 공식 타입
    e.preventDefault();
    e.returnValue = ''; // 경고는 뜨지만 필요한 코드
  };
  const enablePrevent = () => window.addEventListener('beforeunload', listener);
  const disablePrevent = () =>
    window.removeEventListener('beforeunload', listener);
  return { enablePrevent, disablePrevent };
};
