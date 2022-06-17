import { Navigate, useLocation } from "react-router-dom"


export const RequiresAuth = ({ children, token }) => {
    const location = useLocation();
    return token ? children : <Navigate to="/login" state={{ from: location }} replace />
}