import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { findPost, getSinglePost, loadAllPosts, loadComments } from "../../features/postsSlice";
import { Comment } from "../Comment/Comment"
import { CommentText } from "../CommentText/CommentText";
import { SinglePost } from "../SinglePost/SinglePost";




export const Comments = () => {
    const { postId } = useParams();

    const dispatch = useDispatch();
    const { post,comments, posts } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getSinglePost(postId))
        dispatch(loadComments(postId))

    }, [posts.posts])

    return <div className="comments-container">
        {
            post && <SinglePost post={post.post} />
        }
        {
            comments.comments ? comments.comments.map((comment) => {
                return <Comment comment={comment} key={comment._id} postId={postId} />
            }) : ""
        }
        <CommentText postId={postId} />

    </div>
}