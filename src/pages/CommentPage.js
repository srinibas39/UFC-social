import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Comments } from "../components/Comments/Comments"
import { Navbar } from "../components/NavBar/NavBar"

export const CommentPage = () => {
    return <>
     <Navbar/>
     <AutoComplete/>
     <Comments/>
    </>
}