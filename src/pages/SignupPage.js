import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Navbar } from "../components/NavBar/NavBar"
import { Signup } from "../components/Signup/Signup"

export const SignupPage = () => {
    return <>
       <Navbar/>
       <AutoComplete/>
       <Signup/>
    </>
}