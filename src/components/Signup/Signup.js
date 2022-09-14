import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import "./Signup.css"
import { useDispatch, useSelector } from "react-redux";
import { loadSignup } from "../../features/authSlice";
import masvidal from "../../images/Masividal.png"


export const Signup = () => {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const location = useLocation();
    const [altImg, setAltImg] = useState(false)

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        image: ""
    });



    useEffect(() => {
        if (user) {
            if (!location?.state) {
                navigate("/explore")
            }
            else {

                navigate(`${location?.state?.from?.pathname}`)
            }
        }
    }, [user])

    const handleSubmit = () => {
        dispatch(loadSignup(form))
    }
    const handleDetails = () => {
        setAltImg(true)
        setForm({ ...form, firstName: "Subrat", lastName: "Biswal", username: "subrat Biswal", password: "12345678", image: masvidal})
    }

    return <div className="signup-container">
        <div className="signup">
            <h2>Sign up</h2>
            <div className="image-container">

                {
                    altImg ? <img src={form.image} onClick={() => setAltImg(false)} /> :
                        <input type="file" accept="image/png" onChange={(e) => (setForm({ ...form, image: URL.createObjectURL(e.target.files[0]) }), setAltImg(true))} />

                }
                {
                    !altImg && <small>Upload Profile pIc</small>
                }

            </div>
            <div className="firstname-container">
                <label htmlFor="firstname">Firstname</label>
                <input type="text" name="firstname" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
            </div>
            <div className="lastname-container">
                <label htmlFor="lastname">Lastname</label>
                <input type="text" name="lastname" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
            </div>
            <div className="email-container">
                <label htmlFor="email">Username</label>
                <input type="email" name="username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
            </div>
            <div className="password-container">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>

            <button className="btn-register" onClick={() => handleDetails()}>Fill up the details</button>
            <button className="btn-register" onClick={() => handleSubmit()}>Create New Account</button>
            <div className="account-login" onClick={() => navigate("/login")}>
                <p>Already have an account</p>
                <span className="material-icons"> arrow_forward_ios </span>
            </div>
        </div>
    </div>
}