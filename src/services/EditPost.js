import axios from "axios"

export const EditPost = ({ postData, token }) => {
    return axios.post(`/api/posts/edit/${postData._id}`,
        { postData },
        {
            headers: {
                authorization: token
            }
        })
}