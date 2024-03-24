import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import MyAside from './components/MyAside';
import StartStudy from './pages/StartStudy';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/study" />,
  },
  {
    path: "/",
    element:
      <>
        <MyAside />
        <Outlet />
      </>,
    children: [
      {
        path: "/study",
        element: <StartStudy />,
      }
    ],
  },
]);

export default router;