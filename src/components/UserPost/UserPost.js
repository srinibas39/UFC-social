import "./UserPost.css"

export const UserPost = () => {
    return <div className="user-post-container">
        <img src={require("../../images/Conor.png")} alt="user" />
        <div>
            <h3>Adarsh Ballika</h3>
            <small>Tue May 17 2022 11:02:05 AM</small>
            <p>Adarsh Ballika Tue May 17 2022 11:02:05 AM</p>
            <div>
                <span class="material-symbols-outlined">
                    favorite
                </span>
                <span class="material-symbols-outlined">
                    chat_bubble
                </span>
                <span class="material-symbols-outlined">
                    bookmark
                </span>
                <span class="material-symbols-outlined">
                    share
                </span>
            </div>
        </div>

    </div>
}