import "./Suggestion.css"

export const Suggestion = () => {
    return <div className="suggestion-container">
        <div className="suggestion">
            <img src={require("../../images/Conor.png")} alt="user" />
            <button>FOLLOW</button>
        </div>
        <div className="suggestion">
            <img src={require("../../images/Conor.png")} alt="user" />
            <button>FOLLOW</button>
        </div>
        <div className="suggestion">
            <img src={require("../../images/Conor.png")} alt="user" />
            <button>FOLLOW</button>
        </div>
    </div>
}