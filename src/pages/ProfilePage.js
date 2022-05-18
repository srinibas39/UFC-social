import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Comments } from "../components/Comments/Comments"
import { Navbar } from "../components/NavBar/NavBar"
import { Profile } from "../components/Profile/Profile"


export const ProfilePage = () => {
    return <>
        <Navbar />
        <AutoComplete />
        <Profile />
    </>
}