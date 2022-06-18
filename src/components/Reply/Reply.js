import { useState } from "react"
import { ReplyEdit } from "../ReplyEdit/ReplyEdit";
import { ReplyText } from "../ReplyText/ReplyText";
import { useSelector } from "react-redux";
import "./Reply.css"

export const Reply = ({ postId, comment }) => {

    const [reply, setReply] = useState(false);
    const { showReplyEdit } = useSelector((state) => state.posts);
    return <>
        {
            !reply && <div className="reply" onClick={() => setReply(true)}>
                Reply
            </div>
        }

        {
            reply && <ReplyText setReply={setReply} postId={postId} comment={comment} />
        }
        {
            showReplyEdit && <ReplyEdit setReply={setReply} postId={postId} comment={comment} />
        }
    </>
}