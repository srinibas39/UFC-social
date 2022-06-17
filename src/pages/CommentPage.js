import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { AutoComplete } from "../components/AutoComplete/AutoComplete"
import { CommentEdit } from "../components/CommentEdit/CommentEdit"
import { Comments } from "../components/Comments/Comments"
import { InputTextModal } from "../components/InputTextModal/InputTextModal"
import { Navbar } from "../components/NavBar/NavBar"


export const CommentPage = () => {

    const { show, showComment } = useSelector((state) => state.posts);
    const { postId } = useParams();
    return <>
        <Navbar />
        <AutoComplete />
        <Comments postId={postId} />
        <InputTextModal show={show} />
        {
            showComment && <CommentEdit postId={postId}/>
        }
        
       


    </>
}