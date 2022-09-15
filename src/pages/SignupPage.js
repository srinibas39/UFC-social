import { useSelector } from "react-redux"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Navbar } from "../components/NavBar/NavBar"
import { Signup } from "../components/Signup/Signup"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const SignupPage = () => {
    const { mode } = useSelector((state) => state.mode);
    return <div id={mode ? "dark-mode" : ""} style={{ minHeight: "100vh", overflow: "hidden" }}>
        <Navbar />
        <AutoComplete />
        <Signup />
        <div className="blank"></div>
        <ToastContainer />
    </div>
}