import "./UserPost.css"

export const UserPost = () => {
    return <div className="user-post-container">
        <img src={require("../../images/Conor.png")} alt="user" />
        <div>
            <h3>Adarsh Ballika</h3>
            <small>Tue May 17 2022 11:02:05 AM</small>
            <p>Adarsh Ballika Tue May 17 2022 11:02:05 AM</p>
            <div>
                <span className="material-symbols-outlined">
                    favorite
                </span>
                <span className="material-symbols-outlined">
                    chat_bubble
                </span>
                <span className="material-symbols-outlined">
                    bookmark
                </span>
                <span className="material-symbols-outlined">
                    share
                </span>
                <span className="material-symbols-outlined">
                    delete
                </span>
            </div>
        </div>

    </div>
}