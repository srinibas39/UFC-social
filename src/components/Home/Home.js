import "./Home.css"

export const Home = () => {
    return <div className="home-container">
        <div className="home">
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
                <button>JOIN NOW</button>
                <a>Already have an account?</a>
            </div>

        </div>
        <div className="home-img">
            <img src={require("../../images/ufc-logo.jpg")}></img>
        </div>
    </div>
}