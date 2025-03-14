import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import UseInput from './pages/01-useState/UseInput';
import UseTabs from './pages/01-useState/UseTabs';
import UseTitle from './pages/02-useEffect/UseTitle';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/create-useInput', element: <UseInput /> },
  { path: '/create-useTabs', element: <UseTabs /> },
  { path: '/create-useTitle', element: <UseTitle /> },
]);

export default router;
