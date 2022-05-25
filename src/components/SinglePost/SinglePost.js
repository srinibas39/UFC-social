import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { likePostHandler } from "../../backend/controllers/PostController"
import { dislikePosts, loadAllPosts, loadDislike, loadLike } from "../../features/postsSlice"


export const SinglePost = ({ post }) => {

    const dispatch = useDispatch();
    const { posts, status, dPosts } = useSelector((state) => state.posts);
    const { user, token } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    return <div className="user-post-container">
        <img src={require("../../images/Conor.png")} alt="user" />
        <div>
            {/* {user.firstName + " " + user.lastName} */}
            <h3>{post.username}</h3>
            <small>{Date(post.createdAt)}</small>
            <p>{post.content}</p>
            {
                post.image && <img src={post.image} alt="user" id="post-img" />
            }

            <div>
                {
                    post.likes.likeCount > 0 ? <span className="material-symbols-rounded like-text like" onClick={() => (dispatch(loadLike({ token, id: post._id })), dispatch(dislikePosts({ id: post._id, type: "like" })))} >
                        thumb_up <span style={{ fontSize: "1rem" }}>{post.likes.likeCount}</span>
                    </span> :
                        <span className="material-symbols-outlined" onClick={() => (dispatch(loadLike({ token, id: post._id })), dispatch(dislikePosts({ id: post._id, type: "like" })))}>
                            thumb_up
                        </span>

                }
                {
                    dPosts.includes(post._id) ? <span className="material-symbols-rounded" >thumb_down</span> :
                        <span className="material-symbols-outlined"
                            onClick={() => (dispatch(loadDislike({ token, id: post._id })),
                                post.likes.likeCount > 0 && dispatch(dislikePosts({ id: post._id, type: "dislike" })))} >
                            thumb_down</span>


                }

                <span className="material-symbols-outlined" onClick={() => navigate(`/comment/${post._id}`)}>
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
}