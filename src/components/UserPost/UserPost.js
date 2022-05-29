import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { likePostHandler } from "../../backend/controllers/PostController"
import { dislikePosts, loadAllPosts, loadDislike, loadLike } from "../../features/postsSlice"
import { SinglePost } from "../SinglePost/SinglePost"
import "./UserPost.css"

export const UserPost = ({ setShow }) => {

    const dispatch = useDispatch();
    const { posts, status, dPosts } = useSelector((state) => state.posts);
    const { user, token } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (status === "idle") {
            dispatch(loadAllPosts());
        }
    }, [dispatch, status])

    return <>
        {
            posts.posts ? posts.posts.map((post) => {
                return <SinglePost post={post} key={post._id}  setShow={setShow} />
            }) : ""
        }
    </>
}