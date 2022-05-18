import "./CommentText.css"

export const CommentText = () => {
    return <div className="comment-text-container">
        <div className="input-text">

            <img src={require("../../images/Conor.png")} alt="user" />

            <div className="input-text-text">
                <textarea placeholder="Type here to post" />
                <div className="input-text-option">
                    <div>
                        <span class="material-symbols-outlined">
                            image
                        </span>
                        <span class="material-symbols-outlined">
                            gif
                        </span>
                        <span class="material-symbols-outlined">
                            mood
                        </span>

                    </div>
                    <div className="comment-text-buttons">
                        <button>REPLY</button>
                        <button style={{marginLeft:"10px"}}>CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}