import { useBeforeLeave } from '@/hooks';

const UseBeforeLeave = () => {
  const begForLife = () => console.log("'Please don't leave");
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default UseBeforeLeave;
