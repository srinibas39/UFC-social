import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Navbar } from "../components/NavBar/NavBar"
import { Profile } from "../components/Profile/Profile"


export const ProfilePage = () => {
    return <>
        <Navbar />
        <AutoComplete />
        <Profile />
    </>
}