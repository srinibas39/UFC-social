import axios from "axios";

export const GetAllUsers = () => {
    return axios.get("/api/users");
}