import { ReplyText } from "../ReplyText/ReplyText"
import "./ReplyEdit.css"

export const ReplyEdit = ({setReply,postId,comment}) => {
    return <div className="reply-edit-container">
       <ReplyText  setReply={setReply} postId={postId} comment={comment} />
    </div>
}