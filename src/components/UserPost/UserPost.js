import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAllPosts } from "../../features/postsSlice"
import "./UserPost.css"

export const UserPost = () => {

    const dispatch = useDispatch();
    const { posts,status } = useSelector((state) => state.posts);

    useEffect(() => {
        if(status==="idle")
        dispatch(loadAllPosts());
    }, [dispatch,status])

    return <>
        {
            posts.posts ? posts.posts.map((post) => {
                return <div className="user-post-container">
                    <img src={require("../../images/Conor.png")} alt="user" />
                    <div>
                        <h3>{post.username}</h3>
                        <small>Tue May 17 2022 11:02:05 AM</small>
                        <p>{post.content}</p>
                        <div>
                            <span className="material-symbols-outlined">
                                favorite
                            </span>
                            <span className="material-symbols-outlined">
                                chat_bubble
                            </span>
                            <span className="material-symbols-outlined">
                                bookmark
                            </span>
                            <span className="material-symbols-outlined">
                                share
                            </span>
                            <span className="material-symbols-outlined">
                                delete
                            </span>
                        </div>
                    </div>

                </div>
            }) : ""
        }
    </>
}