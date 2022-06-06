import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadLogout } from "../../features/authSlice";
import { getSingleUser } from "../../features/UserSlice";
import { EditProfile } from "../EditProfile/EditProfile"
import "./Profile.css"
export const Profile = () => {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const { user, followUser } = useSelector((state) => state.users);

    const auth = useSelector((state) => state.auth);

    const { userId } = useParams();

    useEffect(() => {
        dispatch(getSingleUser(userId));
    }, [])



    const handleLogout = () => {
        dispatch(loadLogout())
    }


    return <>
        {
            !followUser ? followUser._id !== userId : userId === auth.user._id ? <div className="profile-container">
                <img src={require("../../images/Conor.png")} alt="user" />
                <h2>{user.firstName + " " + user.lastName}</h2>
                <small>@{user.firstName}</small>
                <div className="edit-buttons">
                    <button className="btn-edit" onClick={() => setShow(true)}>EDIT PROFILE</button>
                    <button className="btn-logout" onClick={handleLogout}>LOGOUT</button>
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
                :
                <div className="profile-container">
                    <img src={require("../../images/Conor.png")} alt="user" />
                    <h2>{user.firstName + " " + user.lastName}</h2>
                    <small>@{user.firstName}</small>
                    <div className="edit-buttons">
                        {/* <button className="btn-edit" onClick={() => setShow(true)}>EDIT PROFILE</button>
                        <button className="btn-logout" onClick={handleLogout}>LOGOUT</button> */}

                        <button className="btn-unfollow" onClick={handleLogout}>UNFOLLOW</button>

                    </div>

                    <p>{user.profile}</p>
                    <div className="followers">
                        <div>
                            <h2>{followUser.following ? followUser.following.length : 0}</h2>
                            <div>Following</div>
                        </div>
                        <div>
                            <h2>0</h2>
                            <div>Posts</div>
                        </div>
                        <div>
                            <h2>{followUser.followers ? followUser.followers.length : 0}</h2>
                            <div>Followers</div>
                        </div>
                    </div>
                </div>
        }
        <EditProfile show={show} setShow={setShow} />

    </>
}