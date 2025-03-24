export const useConfirm = (
  message: string = '',
  onConfirm: () => void,
  // onCancel: () => void
  onCancel?: () => void
): (() => void) | undefined => {
  if (!onConfirm || typeof onConfirm !== 'function') {
    return;
  }
  // onCancel이 존재할 경우에만 타입이 함수인지 확인할 것
  //onCancel이 선택적 매개변수라는 것 , 타입에서 ? 옵셔널 연산자 필요
  if (onCancel && typeof onCancel !== 'function') {
    return;
  }
  const confirmAction = () => {
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel?.();
    }
  };
  return confirmAction;
};
