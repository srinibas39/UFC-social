

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deletePost, dislikePosts, loadDislike, loadLike, setEditPost, setImgInput, setPostInput } from "../../features/postsSlice"
import { addBookmark, removeBookmark } from "../../features/UserSlice";
import "./SinglePost.css"




export const SinglePost = ({ post, setShow }) => {

    const dispatch = useDispatch();
    const { dPosts } = useSelector((state) => state.posts);
    const { token } = useSelector((state) => state.auth);
    const { bookmarks } = useSelector((state) => state.users)
    const navigate = useNavigate();

    const handlePostEdit = () => {
        setShow(true);
        dispatch(setPostInput(post.content))
        dispatch(setImgInput(post.image));
        dispatch(setEditPost(post));

    }

    const handleBookmark = () => {
        dispatch(addBookmark({ token, postId: post._id }))
    }

    const handleUnbookmark = () => {
        dispatch(removeBookmark({ token, postId: post._id }))
    }


    return <div className="user-post-container">
        <img src={require("../../images/Conor.png")} alt="user" />
        <div>

            <h3 onClick={() => navigate(`/profile/${post.userId}`)}>{post.username}</h3>
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
                {
                    bookmarks.some((el) => el._id === post._id) ? <span className="material-icons-outlined" onClick={handleUnbookmark}>
                        bookmark
                    </span> : <span className="material-symbols-outlined" onClick={handleBookmark}>
                        bookmark
                    </span>
                }




                <span className="material-symbols-outlined" onClick={handlePostEdit}>
                    edit
                </span>
                <span className="material-symbols-outlined">
                    share
                </span>
                <span className="material-symbols-outlined" onClick={() => dispatch(deletePost({ postId: post._id, token: token }))}>
                    delete
                </span>
            </div>
        </div>

    </div >
}