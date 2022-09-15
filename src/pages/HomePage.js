import { useSelector } from "react-redux"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Home } from "../components/Home/Home"
import { Navbar } from "../components/NavBar/NavBar"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const HomePage = () => {
    const { mode } = useSelector((state) => state.mode);
    return <div id={mode ? "dark-mode" : ""} style={{minHeight:"100vh",overflow:"hidden"}}>
        <Navbar />
        <AutoComplete />
        <Home />
        <div className="blank"></div>
        <ToastContainer/>
    </div>
}