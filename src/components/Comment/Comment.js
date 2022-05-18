import { CommentText } from "../CommentText/CommentText"
import "./Comment.css"

export const Comment = () => {
    // implement nested component
    return <div className="comment-container" style={{ "marginLeft": "25px", "marginTop": "10px" }}>
        <div className="comment">
            <img src={require("../../images/Conor.png")} alt="user" />
            <div className="comment-text">
                <h3>Srinibas khuntia</h3>
                <p>Hello my name is srinibas khuntia</p>
                <div>
                    <span className="material-symbols-outlined">
                        reply
                    </span>
                    <span className="material-symbols-outlined">
                        edit
                    </span>
                    <span className="material-symbols-outlined">
                        delete
                    </span>
                </div>
            </div>
        </div>
        <CommentText />
        <div className="comment-container" style={{ "marginLeft": "25px", "marginTop": "10px" }}>
            <div className="comment">
                <img src={require("../../images/Conor.png")} alt="user" />
                <div className="comment-text">
                    <h3>Srinibas khuntia</h3>
                    <p>Hello my name is srinibas khuntia</p>
                    <div>
                        <span className="material-symbols-outlined">
                            reply
                        </span>
                        <span className="material-symbols-outlined">
                            edit
                        </span>
                        <span className="material-symbols-outlined">
                            delete
                        </span>
                    </div>
                </div>


            </div>
            <CommentText />
        </div>
    </div>
}