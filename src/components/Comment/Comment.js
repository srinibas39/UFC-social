
import "./Comment.css"

export const Comment = ({el}) => {
    // implement nested component

    return <div className="comment-container" style={{ "marginLeft": "25px", "marginTop": "10px" }}>
        <div className="comment">
            <img src={require("../../images/Conor.png")} alt="user" />
            <div className="comment-text">
                <h3>Srinibas khuntia</h3>
                <p>{el.text}</p>
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
        
     
    </div>
}