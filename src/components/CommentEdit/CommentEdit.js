import { CommentText } from "../CommentText/CommentText"
import "./CommentEdit.css"
export const CommentEdit=({postId})=>{
    return <div className="comment-edit-container">
        <CommentText postId={postId}/>
    </div>
}