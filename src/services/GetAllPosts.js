import axios from "axios"

export const GetAllPosts = () => {
    return axios.get("/api/posts");
}