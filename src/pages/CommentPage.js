import { useSelector } from "react-redux"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Comments } from "../components/Comments/Comments"
import { InputTextModal } from "../components/InputTextModal/InputTextModal"
import { Navbar } from "../components/NavBar/NavBar"

export const CommentPage = () => {
  
    const { show } = useSelector((state) => state.posts)
    return <>
     <Navbar/>
     <AutoComplete/>
     <Comments/>
     <InputTextModal show={show}  />
    </>
}