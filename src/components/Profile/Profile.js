import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadLogout } from "../../features/authSlice";
import { getAllPostUser } from "../../features/postsSlice";
import { follow, getSingleUser, unfollowUser } from "../../features/userSlice";
import { EditProfile } from "../EditProfile/EditProfile"
import "./Profile.css"
export const Profile = () => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.users);

    const auth = useSelector((state) => state.auth);

    const { userId } = useParams();

    useEffect(() => {
        dispatch(getSingleUser(userId));
    }, [])

    useEffect(() => {
        dispatch(getAllPostUser(user.username));
    }, [user])



    const handleLogout = () => {
        dispatch(loadLogout())
    }

    const handleUnfollow = (userId) => {
        dispatch(unfollowUser({ token: auth.token, userId }))
        dispatch(getSingleUser(userId));
    }
    const handleFollow = (userId) => {
        dispatch(follow({ token: auth.token, userId }))
        dispatch(getSingleUser(userId));
    }


    return <>
        {
            userId === auth.user._id ? <div className="profile-container">
                <img src={require("../../images/Conor.png")} alt="user" />
                <h2>{user.firstName + " " + user.lastName}</h2>
                <small>@{user.firstName}</small>
                <div className="edit-buttons">
                    <button className="btn-edit" onClick={() => setShow(true)}>EDIT PROFILE</button>
                    <button className="btn-logout" onClick={handleLogout}>LOGOUT</button>
                </div>
                <p>{user.profile}</p>
                <p style={{ fontWeight: "bold", margin: "1rem" }}>{user.website}</p>
                <div className="followers">
                    <div>
                        <h2>{user.following ? user.following.length : 0}</h2>
                        <div>Following</div>
                    </div>
                    <div>
                        <h2>0</h2>
                        <div>Posts</div>
                    </div>
                    <div>
                        <h2>{user.followers ? user.followers.length : 0}</h2>
                        <div>Followers</div>
                    </div>
                </div>
            </div>
                :
                <div className="profile-container">
                    <img src={require("../../images/Conor.png")} alt="user" />
                    <h2>{user.firstName + " " + user.lastName}</h2>
                    <small>@{user.firstName}</small>
                    <div className="edit-buttons">
                        {

                            user.followers && user.followers.length ? <button className="btn-unfollow" onClick={() => handleUnfollow(user._id)}>UNFOLLOW</button> :
                                <button className="btn-unfollow" onClick={() => handleFollow(user._id)}>FOLLOW</button>
                        }

                    </div>

                    <p>{user.profile}</p>
                    <div className="followers">
                        <div>
                            <h2>{user.following ? user.following.length : 0}</h2>
                            <div>Following</div>
                        </div>
                        <div>
                            <h2>0</h2>
                            <div>Posts</div>
                        </div>
                        <div>
                            <h2>{user.followers ? user.followers.length : 0}</h2>
                            <div>Followers</div>
                        </div>
                    </div>
                </div>
        }
        <EditProfile show={show} setShow={setShow} />

    </>
}