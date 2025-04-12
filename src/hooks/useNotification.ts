export const useNotification = (
  title: string,
  options?: NotificationOptions
): (() => void) | undefined => {
  //* Notification이 window에 없을때 반환값이 없음 즉 undefined이므로 타입에서도 넣어주어야 함
  if (!('Notification' in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        }
      });
    } else {
      new Notification(title, options);
    }
  };

  return fireNotif;
};
