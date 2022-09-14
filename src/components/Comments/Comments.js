import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSinglePost,loadComments } from "../../features/postsSlice";
import { Comment } from "../Comment/Comment"
import { CommentText } from "../CommentText/CommentText";
import { SinglePost } from "../SinglePost/SinglePost";




export const Comments = ({postId}) => {
   

    const dispatch = useDispatch();
    const { post, comments, posts } = useSelector((state) => state.posts);
    

    useEffect(() => {
        dispatch(getSinglePost(postId))
        dispatch(loadComments(postId))

    }, [posts.posts])

    return <div className="comments-container" style={{overflow:"hidden"}} >
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