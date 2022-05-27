import "./CommentText.css"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../features/postsSlice";


export const CommentText = ({ postId }) => {
    const [text, setText] = useState("");
    const dispatch = useDispatch();
    const { token } = useSelector((state) => state.auth);

    const handleComment = () => {
        dispatch(addComment({ postId, commentData: { text, children: [] }, token }));
        setText("");
    }
    return <div className="comment-text-container">
        <div className="input-text">

            <img src={require("../../images/Conor.png")} alt="user" />

            <div className="input-text-text">
                <input placeholder="Type here to post" value={text}
                    onChange={(e) => setText(e.target.value)} />
                <div className="input-text-option">
                    <div className="comment-text-buttons">
                        <button onClick={handleComment}>POST</button>
                        <button style={{ marginLeft: "10px" }}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}