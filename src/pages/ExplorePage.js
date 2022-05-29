import { useState } from "react"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Categories } from "../components/Categories/Categories"
import { InputText } from "../components/InputText/InputText"
import { InputTextModal } from "../components/InputTextModal/InputTextModal"
import { Navbar } from "../components/NavBar/NavBar"
import { Suggestion } from "../components/Suggestion/Suggestion"
import { UserPost } from "../components/UserPost/UserPost"



export const ExplorePage = () => {

    const [show, setShow] = useState(false)

    return <>
        <Navbar />
        <AutoComplete />
        <InputText />
        <Suggestion />
        <Categories />
        <UserPost setShow={setShow} />
        <InputTextModal show={show} setShow={setShow} />

    </>
}