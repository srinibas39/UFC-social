import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Home } from "../components/Home/Home"
import { InputText } from "../components/InputText/InputText"
import { Navbar } from "../components/NavBar/NavBar"

export const HomePage = () => {
    return <>
        <Navbar />
        <AutoComplete />
        {/* <Home /> */}
        <InputText/>

    </>
}