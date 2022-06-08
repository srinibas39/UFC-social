
import axios from "axios"

export const RemoveBookmark = (token, postId) => {
    return axios.post(`/api/users/remove-bookmark/${postId}`,{}, { headers: { authorization: token } })
}