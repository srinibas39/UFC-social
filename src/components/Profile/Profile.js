import { useState } from "react"
import { EditProfile } from "../EditProfile/EditProfile"
import "./Profile.css"
export const Profile = () => {
    const [show, setShow] = useState(false);
    return <>
        <div className="profile-container">
            <img src={require("../../images/Conor.png")} alt="user" />
            <h2>Adarsh Ballika</h2>
            <small>@Adarsh</small>
            <div className="edit-buttons">
                <button className="btn-edit">EDIT PROFILE</button>
                <button className="btn-logout">LOGOUT</button>
            </div>
            <p>Created this app in MERN stack, used Redux Toolkit for state management, Chakra UI for CSS, Cloudinary for image upload. Core features include Create post with text and image, Posting shared content, Post Feed, Search User, Notification Management, Follow/Unfollow Users, Like Post, Update User Profile and profile image, JWT based Authentication</p>
            <div className="followers">
                <div>
                    <h2>0</h2>
                    <div>Following</div>
                </div>
                <div>
                    <h2>0</h2>
                    <div>Posts</div>
                </div>
                <div>
                    <h2>0</h2>
                    <div>Followers</div>
                </div>
            </div>
        </div>
        <EditProfile show={show} />

    </>
}