import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { loadAllPosts } from "../../features/postsSlice"
import { SinglePost } from "../SinglePost/SinglePost"
import "./UserPost.css"

export const UserPost = () => {

    const dispatch = useDispatch();
    const { posts, status, sort } = useSelector((state) => state.posts);

    

    useEffect(() => {
        if (status === "idle") {
            dispatch(loadAllPosts());
        }

    }, [dispatch, status, posts])


    const getSortData = (sort) => {
        
        if (sort === "Trending") {
            const allPosts = [...posts.posts];
            return allPosts.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
        }
        if (sort === "Recent") {
            const allPosts = [...posts.posts];
            return allPosts.slice(0).reverse();

        }
        else {
            return posts.posts
        }
    }
    const sortData = getSortData(sort);

    return <>
        {
            sortData ? sortData.map((post) => {
                return <SinglePost post={post} key={post._id} />
            }) : ""
        }
    </>
}