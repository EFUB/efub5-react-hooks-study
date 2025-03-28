import { useEffect, useState } from 'react';

export const useNetwork = (onChange?: (online: boolean) => void): boolean => {
  const [status, setStatus] = useState<boolean>(navigator.onLine);

  const handleChange = () => {
    const isOnline = navigator.onLine;
    if (typeof onChange === 'function') {
      onChange(isOnline);
    }
    setStatus(isOnline);
  };

  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);

  return status;
};
