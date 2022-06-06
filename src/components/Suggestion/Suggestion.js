import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { followUser, getAllUsers } from "../../features/UserSlice";
import "./Suggestion.css"

export const Suggestion = () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.users);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const { token } = useSelector((state) => state.auth);

    const handleFollow = (userId) => {
        dispatch(followUser({ token, userId }))
    }

    const getFilterUsers = () => {
        return users.filter((el) => el._id !== user._id)
    }

    const filterUsers = getFilterUsers(user._id)

    return <div className="suggestion-container">
        {
            filterUsers && filterUsers.map((user) => {
                return <div className="suggestion" key={user._id}>
                    <img src={require("../../images/Conor.png")} alt="user" />
                    <button onClick={() => handleFollow(user._id)}>FOLLOW</button>
                </div>
            })
        }
    </div>
}