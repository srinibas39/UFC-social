import axios from "axios"


export const UnfollowService = (token, userId) => {
    return axios.post(`/api/users/unfollow/${userId}`,
        {},
        {
            headers: {
                authorization: token
            }
        })
}