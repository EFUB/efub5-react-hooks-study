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
]);

export default router;
