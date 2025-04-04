import './App.css';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <>
      <h1>EFUB Frontend Study- React Hooks </h1>
      <ol>
        <li>
          <Link to='/create-useInput'>useInput </Link>
        </li>
        <li>
          <Link to='/create-useTabs'>useTabs</Link>
        </li>
        <li>
          <Link to='/create-useTitle'>useTitle</Link>
        </li>
        <li>
          <Link to='/create-useClick'>useClick</Link>
        </li>
        <li>
          <Link to='/create-useConfirm'>useConfirm</Link>
        </li>
        <li>
          <Link to='/create-usePreventLeave'>usePreventLeave</Link>
        </li>
        <li>
          <Link to='/create-useBeforeLeave'>useBeforeLeave</Link>
        </li>
        <li>
          <Link to='/create-useFadeIn'>useFadeIn</Link>
        </li>
        <li>
          <Link to='/create-useNetwork'>useNetwork</Link>
        </li>
        <li>
          <Link to='/create-useScroll'>useScroll</Link>
        </li>
        <li>
          <Link to='/create-useFullscreen'>useFullscreen</Link>
        </li>
        <li>
          <Link to='/create-useNotification'>useNotification</Link>
        </li>
      </ol>
    </>
  );
};

export default App;
