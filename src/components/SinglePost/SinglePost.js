

import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { deletePost, dislikePosts, loadDislike, loadLike, setEditPost, setImgInput, setPostInput, setShow } from "../../features/postsSlice"
import { addBookmark, removeBookmark, setBookmarks, setUnbookmark } from "../../features/UserSlice";
import { handleToast } from "../../utils/toastUtils";
import "./SinglePost.css"




export const SinglePost = ({ post }) => {

    const dispatch = useDispatch();
    const { token, user } = useSelector((state) => state.auth);
    const { bookmarks } = useSelector((state) => state.users)
    const navigate = useNavigate();
    const { mode } = useSelector((state) => state.mode)

    const handlePostEdit = () => {
        dispatch(setShow(true));
        dispatch(setPostInput(post.content))
        dispatch(setImgInput(post.image));
        dispatch(setEditPost(post));

    }

    const handleBookmark = (post) => {
        handleToast("Post Bookmarked");
        setTimeout(() => dispatch(setBookmarks(post)), 1000)

    }

    const handleUnbookmark = (post) => {
        handleToast("Post UnBookmarked")
        setTimeout(()=>dispatch(setUnbookmark(post)),1000)
        
    }


    return <div className="user-post-container" id={mode ? "dark-mode" : ""}>
        <img src={user._id === post.userId ? user.image : post.profileImg} alt="user" style={{ cursor: "pointer" }} onClick={() => navigate(`/profile/${post.userId}`)} />
        <div>

            <h3 style={{ cursor: "pointer" }} onClick={() => navigate(`/profile/${post.userId}`)}>{post.username}</h3>
            <small>{Date(post.createdAt)}</small>
            <p>{post.content}</p>
            {

                post.image && <img src={post.image} alt="user" id="post-img" />
            }
            <div>
                {
                    post.likes.likedBy.some((el) => el._id === user._id) ? <span className="material-symbols-rounded likecount-pos" onClick={() => (handleToast("Post Liked"), setTimeout(() => dispatch(loadLike({ token, id: post._id })), 1000))}  >
                        thumb_up <span className="likecount">{post.likes.likeCount}</span>
                    </span> :
                        <span className="material-symbols-outlined likecount-pos" onClick={() => (handleToast("Post Liked"), setTimeout(() => dispatch(loadLike({ token, id: post._id })), 1000))}>
                            thumb_up {post.likes.likeCount > 0 && <span className="likecount">{post.likes.likeCount}</span>}
                        </span>

                }
                {
                    post.likes.dislikedBy.some((el) => el._id === user._id) ? <span className="material-symbols-rounded"
                        onClick={() => (handleToast("Post Disliked"), setTimeout(() => dispatch(loadDislike({ token, id: post._id })), 1000))}>thumb_down</span>
                        :
                        <span className="material-symbols-outlined"
                            onClick={() => (handleToast("Post Disliked"), setTimeout(() => dispatch(loadDislike({ token, id: post._id })), 1000))} >thumb_down</span>


                }

                <span className="material-symbols-outlined" onClick={() => navigate(`/comment/${post._id}`)}>
                    chat_bubble
                </span>
                {
                    bookmarks.some((el) => el._id === post._id) ? <span className="material-icons-outlined" onClick={() => handleUnbookmark(post)}>
                        bookmark
                    </span> : <span className="material-symbols-outlined" onClick={() => handleBookmark(post)}>
                        bookmark
                    </span>
                }



                {
                    post.username.toLowerCase() === user.username.toLowerCase() && <span className="material-symbols-outlined" onClick={handlePostEdit}>
                        edit
                    </span>
                }

                {
                    post.username.toLowerCase() === user.username.toLowerCase() && <span className="material-symbols-outlined" onClick={() => dispatch(deletePost({ postId: post._id, token: token }))}>
                        delete
                    </span>
                }

            </div>
        </div>

    </div >
}