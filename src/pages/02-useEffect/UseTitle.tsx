import useTitle from '@/hooks/useTitle';

const UseTitle = () => {
  const titleUpdater = useTitle('Loading...');
  setTimeout(() => titleUpdater('Home'), 3000);
  return (
    <div className='App'>
      <div>Hi</div>
    </div>
  );
};

export default UseTitle;
