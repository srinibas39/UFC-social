import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../features/UserSlice";
import "./EditProfile.css";

export const EditProfile = ({ show, setShow }) => {
  const [userData, setUserData] = useState({
    website: "",
    profile: "",
  });
  const dispatch = useDispatch();
  const { token,user } = useSelector((state) => state.auth);
  const { mode } = useSelector((state) => state.mode)

  const handleUpdate = () => {
    dispatch(editUser({ token, userData }));
    setShow(false)
  
  };
  return (
    <>
      {show && (
        <div className="edit-profile-container"  onClick={() => setShow(false)}>
          <div className="edit-profile" id={mode ? "dark-mode" : ""} onClick={(e) => e.stopPropagation()}>
            <span
              className="material-symbols-outlined"
              onClick={() => setShow(false)}
            >
              close
            </span>

            <div className="avatar">
              <h3>Avatar</h3>
              <img src={user.image} alt="user" />
            </div>
            <div className="name">
              <h3>Name</h3>
              <p>{user.username}</p>
            </div>
            <div className="username">
              <h3>User Name</h3>
              <p>@{user.username}</p>
            </div>
            <div className="website">
              <h3>Website</h3>

              <textarea
                value={userData.website}
                onChange={(e) =>
                  setUserData({ ...userData, website: e.target.value })
                }
              />
            </div>
            <div className="bio">
              <h3>Bio</h3>

              <textarea
                value={userData.profile}
                onChange={(e) =>
                  setUserData({ ...userData, profile: e.target.value })
                }
              />
            </div>
            <button onClick={handleUpdate}>Update</button>
          </div>
        </div>
      )}
    </>
  );
};
