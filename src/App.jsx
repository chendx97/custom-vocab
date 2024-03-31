import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import MyAside from "./components/MyAside";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!Cookies.get('custom-vocab')) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <MyAside />
      <Outlet />
    </>
  )
}

export default App
