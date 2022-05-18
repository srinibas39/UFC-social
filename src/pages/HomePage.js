import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { EditProfile } from "../components/EditProfile/EditProfile"
import { Home } from "../components/Home/Home"
import { InputText } from "../components/InputText/InputText"
import { Navbar } from "../components/NavBar/NavBar"
import { Profile } from "../components/Profile/Profile"
import { Suggestion } from "../components/Suggestion/Suggestion"
import { UserPost } from "../components/UserPost/UserPost"

export const HomePage = () => {
    return <>
        <Navbar />
        <AutoComplete />
        {/* <Home /> */}
        <InputText />
        <Suggestion />
        <UserPost />
        {/* <Profile/> */}
        {/* <EditProfile /> */}


    </>
}