
import { useEffect, useState } from "react"
import { Reply } from "../Reply/Reply"
import "./Comment.css"

export const Comment = ({ comment, postId }) => {




    const nestedComment = (comment.children || []).map((com) => {
        return <div className="comment-container" key={com._id} style={{display: "flex", marginLeft: "4rem" }}>
            <div className="comment">
                <img src={require("../../images/Conor.png")} alt="user" />
                <div className="comment-text">
                    <h3>{com.username}</h3>
                    <p>{com.text}</p>
                    <div className="comment-option">

                        <span className="material-symbols-outlined">
                            edit
                        </span>
                        <span className="material-symbols-outlined margin">
                            delete
                        </span>
                    </div>
                </div>
            </div>
        </div>
    })

    return <div className="comment-container">
        <div className="comment">
            <img src={require("../../images/Conor.png")} alt="user" />
            <div className="comment-text">
                <h3>{comment.username}</h3>
                <p>{comment.text}</p>
                <div className="comment-option">

                    <span className="material-symbols-outlined">
                        edit
                    </span>
                    <span className="material-symbols-outlined margin">
                        delete
                    </span>
                </div>

                <Reply postId={postId} commentId={comment._id} />

            </div>
        </div>
        {nestedComment}

    </div>
}