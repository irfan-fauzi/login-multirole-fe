import { useLocation, Navigate } from "react-router-dom";
import AuthUser from "../helper/AuthUser";

const ProtectRoutes = ({ children }: { children: JSX.Element }) => {
  const user = AuthUser.GetAuth()
  const location = useLocation()
  // jika belum login, paksa ke halaman login
  if(!user){
    return <Navigate to="/auth/login" state={{ from: location }} replace />
  }

  return children
};

export default ProtectRoutes;
