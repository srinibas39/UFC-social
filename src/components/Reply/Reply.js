import { useState } from "react"
import { ReplyText } from "../ReplyText/ReplyText"
import "./Reply.css"

export const Reply = ({ postId, commentId }) => {

    const [reply, setReply] = useState(false)
    return <>
        {
            !reply && <div className="reply" onClick={() => setReply(true)}>
                Reply
            </div>
        }


        {
            reply && <ReplyText setReply={setReply} postId={postId} commentId={commentId} />
        }
    </>
}