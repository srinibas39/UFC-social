import "./EditProfile.css";

export const EditProfile = ({ show , setShow}) => {
  return (
    <>
      {
       show && <div className="edit-profile-container"onClick={()=>setShow(false)}>
          <div className="edit-profile" onClick={(e)=>e.stopPropagation()}>
            <span class="material-symbols-outlined" onClick={()=>setShow(false)}>close</span>

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

              <textarea />
            </div>
            <div className="bio">
              <h3>Bio</h3>

              <textarea />
            </div>
            <button>Update</button>
          </div>
        </div>
      }
    </>
  );
};
