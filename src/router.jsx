import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import StartStudy from './pages/StartStudy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/study" />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/study",
        element: <StartStudy />,
      }
    ],
  },
]);

export default router;