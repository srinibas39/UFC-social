import "./CommentText.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, editComment, setCommentEdit, setShowComment } from "../../features/postsSlice";


export const CommentText = ({ postId }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);
    const { commentEdit, showComment } = useSelector((state) => state.posts);
    const { mode } = useSelector((state) => state.mode)
    

    const handleComment = () => {
        dispatch(addComment({ postId, commentData: { text, children: [] }, token }));
        setText("");
    }
    const handleCancel = () => {
        dispatch(setShowComment(false));
        dispatch(setCommentEdit({}));
    }
    const handleCommentUpdate = () => {
        dispatch(editComment({ postId, commentId: commentEdit._id, commentData: { text, children: commentEdit.children }, token }));
        dispatch(setCommentEdit({}));
        dispatch(setShowComment(false));
    }
    return <div className="comment-text-container" id={mode ? "dark-mode" : ""}>
        <div className="input-text">

            <img src={require("../../images/Conor.png")} alt="user" />

            <div className="input-text-text">
                <input placeholder="Type here to post" value={text}
                    onChange={(e) => setText(e.target.value)} />
                <div className="input-text-option">
                    <div className="comment-text-buttons">
                        {
                            showComment ? <button onClick={handleCommentUpdate}>UPDATE</button> : <button onClick={handleComment}>POST</button>
                        }

                        <button style={{ marginLeft: "10px" }} onClick={handleCancel}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}