
import { useState, useRef, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { editPost, loadEditPost, loadPosts, setEditPost, setImgInput, setPostInput } from "../../features/postsSlice";
import "./InputText.css"

export const InputText = ({ show, setShow }) => {

    const [post, setPost] = useState("");
    const [imageData, setImageData] = useState("");
    const [emoji, setEmoji] = useState(false);
    const { token } = useSelector((state) => state.auth);
    const { postInput, imgInput, editPost } = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const inputRef = useRef(null);
    const handleImage = () => {
        const file = inputRef.current.files[0];
        let url = URL.createObjectURL(file);
        setImageData(url);
        dispatch(setImgInput(url));
        setPost(post);

    }

    const handlePost = () => {

        if (editPost) {
            dispatch(loadEditPost({ postData: { ...editPost, content: post, image: imgInput }, token }));
            dispatch(setEditPost(null));
            setShow(false);
            dispatch(setImgInput(""))
        }
        else {
            if (post !== "" || imageData !== "") {
                dispatch(loadPosts({
                    token: token, postData: {
                        content: post,
                        image: imageData,
                        comments: [],
                        userId: user._id
                    }
                }))
                setImageData("");
                setEmoji("");
                setPost("");
            }
        }


    }


    useEffect(() => {
        show && setPost(postInput)
        setImageData(imgInput)
    }, [postInput, imgInput])

    return <>
        {
            <div className="input-text-container" style={{ height: imageData && "20rem" }} onClick={(e) => e.stopPropagation()} >
                <div className="input-text">

                    <img src={require("../../images/Conor.png")} alt="user" />

                    <div className="input-text-text">
                        <div className="input-text-text-div" onMouseEnter={() => setEmoji(false)}>
                            <input placeholder="Type here to post" value={post} onChange={(e) => setPost(e.target.value)} />
                            <img src={imageData} alt="user" id="input-img" style={{ display: !imageData && "none" }} />
                            <span className="material-symbols-outlined cross" style={{ display: !imageData && "none" }} onClick={() => (setImageData(""))}>
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
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😀</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😃</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😄</p>
                                        </div>
                                        <div>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😁</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😆</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😅</p>
                                        </div>
                                        <div>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>🤣</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😂</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>🙂</p>
                                        </div>
                                        <div>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>🙃</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😉</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😊</p>
                                        </div>
                                        <div>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😇</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😍</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😘</p>
                                        </div>
                                        <div>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😗</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😚</p>
                                            <p onClick={(e) => setPost(post + "" + e.target.innerText)}>😋</p>
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
    </>
}