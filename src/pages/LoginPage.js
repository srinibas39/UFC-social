import { useSelector } from "react-redux";
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Login } from "../components/Login/Login"
import { Navbar } from "../components/NavBar/NavBar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const LoginPage = () => {
    const { mode } = useSelector((state) => state.mode);
    return <div id={mode ? "dark-mode" : ""} style={{minHeight:"100vh",overflow:"hidden"}}>
        <Navbar />
        <AutoComplete />
        <Login/>
        <div className="blank"></div>
        <ToastContainer/>
    </div>
}