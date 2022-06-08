import { useDispatch, useSelector } from "react-redux"
import { SinglePost } from "../SinglePost/SinglePost";

export const PostsUser = () => {
    const dispatch = useDispatch();
    const { userPosts } = useSelector((state) => state.posts)

    return <>
        {
            userPosts && userPosts.map((post) => {
                return <SinglePost post={post} key={post._id} />
            })
        }
    </>
}