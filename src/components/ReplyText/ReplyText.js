import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { editComment, setReplyEdit, setShowReplyEdit } from "../../features/postsSlice";
import { v4 as uuid } from "uuid";
import "./ReplyText.css"
import { handleToast, handleToastWarning } from "../../utils/toastUtils";
export const ReplyText = ({ setReply, postId, comment }) => {
    const [replyText, setReplyText] = useState("");
    const dispatch = useDispatch();
    const { comments, showReplyEdit, replyEdit } = useSelector((state) => state.posts)
    const { token, user } = useSelector((state) => state.auth)


    const handleReply = () => {
        if (replyText.trim().length) {
            handleToast("Reply Posted");
            setTimeout(() => {
                let commentReply = comments.comments
                for (let i = 0; i < commentReply.length; i++) {
                    if (commentReply[i]._id === comment._id) {
                        const commentChild = [...commentReply[i].children, { ...commentReply[i], text: replyText, username: user.username, _id: uuid() }];
                        dispatch(editComment({ postId, commentId: comment._id, commentData: { children: commentChild }, token }));

                    }

                }

                setReplyText("");
                setReply(false);
            }, 1000)
        }
        else {
            handleToastWarning("Reply field cannot be empty");
        }
    }

    const handleReplyEdit = () => {
        if (replyText.trim().length) {
            handleToast("Reply Edited");
            setTimeout(() => {
                let allCommentChildren = comment.children;
                const newChildren = [];
                for (let i = 0; i < allCommentChildren.length; i++) {
                    if (allCommentChildren[i]._id === replyEdit._id) {
                        newChildren.push({ ...replyEdit, text: replyText })
                    }
                    else {
                        newChildren.push(allCommentChildren[i])
                    }
                }
                dispatch(editComment({ postId, commentId: comment._id, commentData: { children: newChildren }, token }));
                dispatch(setShowReplyEdit(false));
                dispatch(setReplyEdit({}))
            }, 1000)
        }
        else {
            handleToastWarning("Reply field cannot be empty")
        }


    }
    const handleCancel = () => {
        setReply(false)
        if (showReplyEdit) {
            dispatch(setShowReplyEdit(false));
            dispatch(setReplyEdit({}))
        }
    }
    return <div className="reply-text-container">
        <div className="input-text">

            <img src={user.image} alt="user" />

            <div className="input-text-text">
                <input placeholder="Type here to post" value={replyText} onChange={(e) => setReplyText(e.target.value)} />
                <div className="input-text-option">
                    <div className="comment-text-buttons">
                        {
                            !showReplyEdit ? <button onClick={() => handleReply()}>POST</button>
                                : <button onClick={() => handleReplyEdit()}>UPDATE</button>
                        }

                        <button style={{ marginLeft: "10px" }} onClick={handleCancel}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}