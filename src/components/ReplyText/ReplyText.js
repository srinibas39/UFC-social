import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addComment, editComment, replyComment } from "../../features/postsSlice";
import "./ReplyText.css"
export const ReplyText = ({ setReply, postId, commentId }) => {
    const [replyText, setReplyText] = useState("");
    const dispatch = useDispatch();
    const { comments } = useSelector((state) => state.posts)
    const { token } = useSelector((state) => state.auth)

    const handleReply = () => {
        let commentReply = comments.comments
        for (let i = 0; i < commentReply.length; i++) {
            if (commentReply[i]._id === commentId) {
                const commentChild = [{ ...commentReply[i], text: replyText }];
                dispatch(editComment({ postId, commentId, commentData: { children: commentChild }, token }));

            }

        }

        setReplyText("");
        setReply(false);
    }
    return <div className="reply-text-container">
        <div className="input-text">

            <img src={require("../../images/Conor.png")} alt="user" />

            <div className="input-text-text">
                <input placeholder="Type here to post" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                <div className="input-text-option">
                    <div className="comment-text-buttons">
                        <button onClick={() => handleReply()}>POST</button>
                        <button style={{ marginLeft: "10px" }} onClick={() => setReply(false)}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}