import { useDispatch, useSelector } from "react-redux"
import { SinglePost } from "../SinglePost/SinglePost";

export const PostsUser = () => {
    
    const { userPosts, sort } = useSelector((state) => state.posts);
    const { bookmarks } = useSelector((state) => state.users);

    const getFilteredData = () => {
        if (sort === "POSTS") {
            return userPosts;
        }
        if (sort === "BOOKMARKS") {
            return bookmarks;
        }
    }
    const filteredData = getFilteredData()
    return <>
        {
            filteredData && filteredData.map((post) => {
                return <SinglePost post={post} key={post._id} />
            })
        }
    </>
}