
import { useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../../features/postsSlice";
import "./InputText.css"

export const InputText = () => {

    const [post, setpost] = useState("");
    const [imageData, setImageData] = useState(null);
    const [emoji, setEmoji] = useState(false);
    const { token } = useSelector((state) => state.auth);
    const dispatch = useDispatch();


    const imgRef = useRef(null);
    const inputRef = useRef(null);
    const handleImage = () => {
        let newSrc = imgRef.current.src;
        const file = inputRef.current.files[0];
        let url = URL.createObjectURL(file);
        setImageData(url)
    }

    const handlePost = () => {
        if (post !== "") {
            dispatch(loadPosts({
                token: token, postData: {
                    content: post,
                    image: imageData
                }
            }))
            setImageData(null);
            setEmoji("");
            setpost("");
        }
    }

    return <div className="input-text-container" style={{ height: imageData && "20rem" }}>
        <div className="input-text">

            <img src={require("../../images/Conor.png")} alt="user" />

            <div className="input-text-text">
                <div className="input-text-text-div" onMouseEnter={() => setEmoji(false)}>
                    <input placeholder="Type here to post" value={post} onChange={(e) => setpost(e.target.value)} />
                    <img src={imageData} alt="user" ref={imgRef} id="input-img" style={{ display: !imageData && "none" }} />
                    <span className="material-symbols-outlined cross" style={{ display: !imageData && "none" }} onClick={() => setImageData(null)}>
                        close
                    </span>
                </div>

                <div className="input-text-option">
                    <div className="input-text-option-div">
                        <label htmlFor="image">
                            <span className="material-symbols-outlined">
                                image
                            </span>
                        </label>

                        <input type="file" id="image" onChange={() => handleImage()} ref={inputRef} style={{ display: "none" }} />


                        <span className="material-symbols-outlined" onClick={() => setEmoji(!emoji)}>
                            mood
                        </span>
                        {
                            emoji && <div className="emoji-box" onMouseLeave={() => setEmoji(false)}>
                                <div>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😀</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😃</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😄</p>
                                </div>
                                <div>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😁</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😆</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😅</p>
                                </div>
                                <div>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>🤣</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😂</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>🙂</p>
                                </div>
                                <div>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>🙃</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😉</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😊</p>
                                </div>
                                <div>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😇</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😍</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😘</p>
                                </div>
                                <div>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😗</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😚</p>
                                    <p onClick={(e) => setpost(post + "" + e.target.innerText)}>😋</p>
                                </div>

                            </div>
                        }


                    </div>
                    <button onClick={handlePost}>POST</button>
                </div>
            </div>
        </div>
    </div >
}