import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { InputText } from "../components/InputText/InputText"
import { Navbar } from "../components/NavBar/NavBar"
import { Suggestion } from "../components/Suggestion/Suggestion"
import { UserPost } from "../components/UserPost/UserPost"



export const ExplorePage = () => {
    return <>
        <Navbar />
        <AutoComplete />
        <InputText />
        <Suggestion />
        <UserPost />
        <UserPost />
        <UserPost />
        <UserPost />


    </>
}