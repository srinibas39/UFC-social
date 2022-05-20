import axios from "axios"


export const AddPost = async ({ token, post }) => {
    return axios.post("/api/posts",
        { post },
        {
            headers: {
                authorization: token
            }
        })
}