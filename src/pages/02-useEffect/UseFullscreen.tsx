import { useFullscreen } from '@/hooks/useFullscreen';

const UseFullscreen = () => {
  const onFulls = (isFull: boolean) => {
    console.log(isFull ? 'we are full' : 'we are small');
  };
  const { element, triggerFull, exitFull } =
    useFullscreen<HTMLDivElement>(onFulls);
  return (
    <div style={{ height: '1000vh' }}>
      <div ref={element}>
        <img src='/src/assets/react.svg' alt='리액트 로고' />
        <button onClick={exitFull}>Exit fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make fullscreen</button>
    </div>
  );
};

export default UseFullscreen;
