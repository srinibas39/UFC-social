import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { findPost, loadAllPosts, loadComments } from "../../features/postsSlice";
import { Comment } from "../Comment/Comment"
import { CommentText } from "../CommentText/CommentText";
import { SinglePost } from "../SinglePost/SinglePost";




export const Comments = () => {
    const { postId } = useParams();

    const dispatch = useDispatch();
    const { post, status, comments } = useSelector((state) => state.posts);



    useEffect(() => {
        if (status === "idle") {
            dispatch(loadAllPosts());

        }
    }, [dispatch, status])


    useEffect(() => {
        const timer = setTimeout(() => dispatch(findPost(postId)), 500);

        return () => clearTimeout(timer);
    }, [])

    useEffect(() => {
        dispatch(loadComments(postId))
    }, [])



    return <div className="comments-container">
        {
            post && <SinglePost post={post} />
        }
        {
            comments.comments && comments.comments.map((comment) => {
                return <Comment comment={comment} key={comment._id} postId={postId} />
            })
        }
        <CommentText postId={postId} />

    </div>
}