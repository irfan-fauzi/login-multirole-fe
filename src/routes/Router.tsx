import { Routes, Route } from "react-router-dom";
import { Register, Login } from "../pages/auth";
import { Dashboard, Landing, NotFound } from "../pages";
import ProtectRoutes from "./ProtectRoutes";

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/auth/register' element={<Register />} />
      <Route path='/auth/login' element={<Login />} />
      <Route path='/*' element={<NotFound />} />
      <Route
        path='/dashboard'
        element={
          <ProtectRoutes>
            <Dashboard />
          </ProtectRoutes>
        }
      />
    </Routes>
  );
};

export default Router;
