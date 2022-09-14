import { useNavigate } from "react-router-dom"
import "./Home.css";
import HomeSvg from "../../images/Home.svg";
import { useSelector } from "react-redux";


export const Home = () => {
    const navigate = useNavigate();
    const { mode } = useSelector((state) => state.mode)
    return <div className="home-container" id={mode ? "dark-mode" : ""}>
        <div className="home" id={mode ? "dark-mode" : ""}>
            <h1>UFC <span>SOCIAL</span></h1>
            <div className="home-logo-text">
                <div>
                    <h3>FOLLOW</h3>
                    <small>PEOPLE AROUND THE GLOBE</small>
                </div>
                <div>
                    <h3>CONNECT</h3>
                    <small>WITH YOUR FRIENDS</small>
                </div>
                <div>
                    <h3>SHARE</h3>
                    <small>WHAT YOU THINKING</small>
                </div>

            </div>
            <div className="buttons">
                <button onClick={() => navigate("/login")}>JOIN NOW</button>
            </div>

        </div>
        <div className="home-img">
            <img src={HomeSvg}></img>
        </div>
    </div>
}