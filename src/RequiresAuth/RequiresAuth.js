import { Navigate } from "react-router-dom"


export const RequiresAuth = ({ children, token }) => {
    return token ? children : <Navigate to="/login" />
}