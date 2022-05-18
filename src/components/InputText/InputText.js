import "./InputText.css"

export const InputText = () => {
    return <div className="input-text-container">
        <div className="input-text">

            <img src={require("../../images/Conor.png")} alt="user" />

            <div className="input-text-text">
                <textarea placeholder="Type here to post" />
                <div className="input-text-option">
                    <div>
                        <span className="material-symbols-outlined">
                            image
                        </span>
                        <span className="material-symbols-outlined">
                            gif
                        </span>
                        <span className="material-symbols-outlined">
                            mood
                        </span>

                    </div>
                    <button>POST</button>
                </div>
            </div>
        </div>
    </div>
}