
import { useSelector, useDispatch } from "react-redux"
import { deleteComment, editComment, setCommentEdit, setReplyEdit, setShowComment, setShowReplyEdit } from "../../features/postsSlice";
import { Reply } from "../Reply/Reply"
import "./Comment.css"

export const Comment = ({ comment, postId }) => {


    const { user, token } = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    const handleCommentEdit = () => {
        dispatch(setShowComment(true));
        dispatch(setCommentEdit(comment));
    }
    const handleReplyEdit = (com) => {
        dispatch(setShowReplyEdit(true));
        dispatch(setReplyEdit(com));
    }

    const handleDelete = () => {
        dispatch(deleteComment({ token, postId, commentId: comment._id }))
    }

    const handleReplyDelete = (com) => {

        const commentChildren = comment.children;
        const newChildren=commentChildren.filter((el)=>el._id!==com._id);
        dispatch(editComment({ postId, commentId: comment._id, commentData: { children: newChildren }, token }));

    }

    const nestedComment = (comment.children || []).map((com) => {
        return <div className="comment-container" key={com._id} style={{ display: "flex", marginLeft: "4rem" }}>
            <div className="comment">
                <img src={user.image} alt="user" />
                <div className="comment-text">
                    <h3>{com.username}</h3>
                    <p>{com.text}</p>
                    <div className="comment-option">

                        <span className="material-symbols-outlined" onClick={() => handleReplyEdit(com)}>
                            edit
                        </span>
                        <span className="material-symbols-outlined margin" onClick={() => handleReplyDelete(com)}>
                            delete
                        </span>
                    </div>
                </div>
            </div>
        </div>
    })

    return <div className="comment-container">
        <div className="comment">
            <img src={user.image} alt="user" />
            <div className="comment-text">
                <h3>{comment.username}</h3>
                <p>{comment.text}</p>
                {
                    user.username === comment.username && <div className="comment-option">

                        <span className="material-symbols-outlined" onClick={() => handleCommentEdit()}>
                            edit
                        </span>
                        <span className="material-symbols-outlined margin" onClick={() => handleDelete()}>
                            delete
                        </span>
                    </div>
                }


                <Reply postId={postId} comment={comment} />

            </div>
        </div>
        {nestedComment}

    </div>
}