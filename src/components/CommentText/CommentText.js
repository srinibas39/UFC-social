import "./CommentText.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment, editComment, setCommentEdit, setShowComment } from "../../features/postsSlice";
import { handleToast, handleToastWarning } from "../../utils/toastUtils";


export const CommentText = ({ postId }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.auth);
    const { commentEdit, showComment } = useSelector((state) => state.posts);
    const { mode } = useSelector((state) => state.mode)


    const handleComment = () => {
        if (text.trim().length) {
            handleToast("comment Posted");
            setTimeout(() => {
                dispatch(addComment({ postId, commentData: { text, children: [] }, token }));
                setText("");
            }, 1000)

        }
        else {
            handleToastWarning("Comment cannot be empty")
        }

    }
    const handleCancel = () => {
        dispatch(setShowComment(false));
        dispatch(setCommentEdit({}));
    }
    const handleCommentUpdate = () => {
        if (text.trim().length) {
            handleToast("comment updated")
            setTimeout(() => {
                dispatch(editComment({ postId, commentId: commentEdit._id, commentData: { text, children: commentEdit.children }, token }));
                dispatch(setCommentEdit({}));
                dispatch(setShowComment(false));
            }, 1000)
        }
        else {
            handleToastWarning("comment field cannot be empty");
        }

    }
    return <div className="comment-text-container" id={mode ? "dark-mode" : ""}>
        <div className="input-text">

            <img src={user.image} alt="user" />

            <div className="input-text-text">
                <input placeholder="Type here to post" value={text}
                    onChange={(e) => setText(e.target.value)} />
                <div className="input-text-option">
                    <div className="comment-text-buttons">
                        {
                            showComment ? <><button onClick={handleCommentUpdate}>UPDATE</button>
                                <button style={{ marginLeft: "10px" }} onClick={handleCancel}>CANCEL</button>
                            </> : <button onClick={handleComment}>POST</button>
                        }


                    </div>
                </div>
            </div>
        </div>
    </div>
}