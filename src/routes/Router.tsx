import { Routes, Route } from "react-router-dom"
import { Register, Login } from "../pages/auth"
import { Dashboard, Landing, NotFound } from "../pages"


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/auth/register" element={<Register/>} />
      <Route path="/auth/login" element={<Login/>} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default Router