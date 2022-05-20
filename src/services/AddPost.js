import axios from "axios"


export const AddPost = async ({ token, postData }) => {
    return axios.post("/api/posts",
        { postData },
        {
            headers: {
                authorization: token
            }
        })
}