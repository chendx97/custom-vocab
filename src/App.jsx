import { Outlet } from "react-router-dom"
import MyAside from "./components/MyAside"

function App() {
  return (
    <>
      <MyAside />
      <Outlet />
    </>
  )
}

export default App
