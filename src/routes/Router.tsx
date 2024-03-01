import { Routes, Route } from "react-router-dom"
import Landing from "../pages/Landing"
import Register from "../pages/auth/Register"
import Login from "../pages/auth/Login"
import NotFound from "../pages/NotFoundPage/NotFound"

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/auth/register" element={<Register/>} />
      <Route path="/auth/login" element={<Login/>} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default Router