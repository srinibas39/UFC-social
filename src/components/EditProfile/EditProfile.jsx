import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "../../features/userSlice";
import "./EditProfile.css";

export const EditProfile = ({ show, setShow }) => {
  const [userData, setUserData] = useState({
    website: "",
    profile: "",
  });
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const handleUpdate = () => {
    dispatch(editUser({ token, userData }));
    setShow(false)
  
  };
  return (
    <>
      {show && (
        <div className="edit-profile-container" onClick={() => setShow(false)}>
          <div className="edit-profile" onClick={(e) => e.stopPropagation()}>
            <span
              className="material-symbols-outlined"
              onClick={() => setShow(false)}
            >
              close
            </span>

            <div className="avatar">
              <h3>Avatar</h3>
              <img src={require("../../images/Conor.png")} alt="user" />
            </div>
            <div className="name">
              <h3>Name</h3>
              <p>Adarsh Ballika</p>
            </div>
            <div className="username">
              <h3>User Name</h3>
              <p>@AdarshBallika</p>
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
