import { useLocation, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";

import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import { loadLogin } from "../../features/authSlice";

export const Login = () => {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        username: "", password: ""
    })

    const { user } = useSelector((state) => state.auth);

    const dispatch = useDispatch();
    const location = useLocation();

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
        dispatch(loadLogin({ username: form.username, password: form.password }))

    }



    const handleGuest = () => {
        dispatch(loadLogin({ username: "srinibas khuntia", password: "srinibaskhuntia123" }))
    }


    return <div className="login-container">
        <div className="login">
            <h2>Login</h2>

            <div className="email-container">
                <label htmlFor="email">username</label>
                <input type="email" name="username" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })} />
            </div>
            <div className="password-container">
                <label htmlFor="password">Password</label>
                <input type="password" value={form.password} name="password" onChange={(e) => setForm({ ...form, password: e.target.value })} />
            </div>
            <button className="btn-logins" onClick={() => handleSubmit()} >Login</button>
            <button onClick={() => handleGuest()}>Login as a Guest</button>
            <div className="create-new" onClick={() => navigate("/signup")}>
                <p>Create new Account</p>
                <span className="material-icons"> arrow_forward_ios </span>
            </div>

        </div>

    </div>
}