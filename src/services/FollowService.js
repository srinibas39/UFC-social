import axios from "axios"


export const FollowServices = (token, userId ) => {
    return axios.post(`/api/users/follow/${userId}`,
        {},
        {
            headers: {
                authorization: token
            }
        })
}