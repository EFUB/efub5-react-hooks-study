import { useInput } from '@/hooks/useInput';
import '@/App.css';

const UseInput = () => {
  // const maxLen = (value: string) => value.length <= 10;
  const maxLen = (value: string) => !value.includes('@'); // @ 포함시 업데이트 X
  const name = useInput('Mr.', maxLen);
  return (
    <>
      <h1>EFUB Frontend Study </h1>
      <input type='text' placeholder='Name' {...name} />
    </>
  );
};

export default UseInput;
