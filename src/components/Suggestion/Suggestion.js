import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../features/UserSlice";
import "./Suggestion.css"

export const Suggestion = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return <div className="suggestion-container">
        {
            users && users.map((user) => {
                return <div className="suggestion" key={user._id}>
                    <img src={require("../../images/Conor.png")} alt="user" />
                    <button>FOLLOW</button>
                </div>
            })
        }

    </div>
}