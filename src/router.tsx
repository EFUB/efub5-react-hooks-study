import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import UseInput from './pages/01-useState/UseInput';
import UseTabs from './pages/01-useState/UseTabs';
import UseTitle from './pages/02-useEffect/UseTitle';
import UseClick from './pages/02-useEffect/UseClick';
import UseConfirm from './pages/02-useEffect/UseConfirm';
import UsePreventLeave from './pages/02-useEffect/UsePreventLeave';
import UseBeforeLeave from './pages/02-useEffect/UseBeforeLeave';
import UseFadeIn from './pages/02-useEffect/UseFadeIn';
import UseNetwork from './pages/02-useEffect/UseNetwork';
import UseScroll from './pages/02-useEffect/UseScroll';
import UseFullscreen from './pages/02-useEffect/UseFullscreen';
import UseNotification from './pages/02-useEffect/UseNotification';
import UseAxios from './pages/02-useEffect/UseAxios';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/create-useInput', element: <UseInput /> },
  { path: '/create-useTabs', element: <UseTabs /> },
  { path: '/create-useTitle', element: <UseTitle /> },
  { path: '/create-useClick', element: <UseClick /> },
  { path: '/create-useConfirm', element: <UseConfirm /> },
  { path: '/create-usePreventLeave', element: <UsePreventLeave /> },
  { path: '/create-useBeforeLeave', element: <UseBeforeLeave /> },
  { path: '/create-useFadeIn', element: <UseFadeIn /> },
  { path: '/create-useNetwork', element: <UseNetwork /> },
  { path: '/create-useScroll', element: <UseScroll /> },
  { path: '/create-useFullscreen', element: <UseFullscreen /> },
  { path: '/create-useNotification', element: <UseNotification /> },
  { path: '/create-useAxios', element: <UseAxios /> },
]);

export default router;
