import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAllPosts } from "../../features/postsSlice"
import "./UserPost.css"

export const UserPost = () => {

    const dispatch = useDispatch();
    const { posts, status } = useSelector((state) => state.posts);
    const { user } = useSelector((state) => state.auth)

    useEffect(() => {
        if (status === "idle")
            dispatch(loadAllPosts());
    }, [dispatch, status])

    return <>
        {
            posts.posts ? posts.posts.map((post) => {
                return <div className="user-post-container" key={post._id}>
                    <img src={require("../../images/Conor.png")} alt="user" />
                    <div>
                        <h3>{user.firstName+" "+user.lastName}</h3>
                        <small>{Date(post.createdAt)}</small>
                        <p>{post.content}</p>
                        {
                            post.image && <img src={post.image} alt="user" id="post-img" />
                        }

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