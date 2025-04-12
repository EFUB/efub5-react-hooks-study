import { useNotification } from '@/hooks/useNotification';

const UseNotification = () => {
  const triggerNotif = useNotification('Cant I steal your energy?', {
    body: "'No you can't",
  });
  return (
    <div>
      <button onClick={triggerNotif}>Hellos</button>
    </div>
  );
};

export default UseNotification;
