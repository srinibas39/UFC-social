
import { useDispatch, useSelector } from "react-redux"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { Categories } from "../components/Categories/Categories"
import { InputText } from "../components/InputText/InputText"
import { InputTextModal } from "../components/InputTextModal/InputTextModal"
import { Navbar } from "../components/NavBar/NavBar"
import { Suggestion } from "../components/Suggestion/Suggestion"
import { UserPost } from "../components/UserPost/UserPost"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react"
import { setSort } from "../features/postsSlice"



export const ExplorePage = () => {

    const { show } = useSelector((state) => state.posts);
    const { mode } = useSelector((state) => state.mode);
    const dispatch = useDispatch();
    
    useEffect(() => {
        setTimeout(() => {
            dispatch(setSort("Recent"))
        }, 1000)
    }, [])



    return <div id={mode ? "dark-mode" : ""} className="explore-page" >
        <Navbar />
        <AutoComplete />
        <InputText />
        <Suggestion />
        <Categories />
        <UserPost />
        <InputTextModal show={show} />
        <div className="blank"></div>
        <ToastContainer />

    </div>
}