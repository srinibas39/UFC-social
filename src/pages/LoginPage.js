import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Login } from "../components/Login/Login"
import { Navbar } from "../components/NavBar/NavBar"


export const LoginPage = () => {
    return <>
        <Navbar />
        <AutoComplete />
        <Login/>
    </>
}