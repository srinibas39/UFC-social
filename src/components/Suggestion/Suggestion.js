import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { follow, getAllUsers, unfollowUser } from "../../features/UserSlice";
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
        dispatch(follow({ token, userId }));
        dispatch(getAllUsers())

    }
    const handleUnfollow = (userId) => {
        dispatch(unfollowUser({ token, userId }));
        dispatch(getAllUsers())
    }

    const getFilterUsers = (userId) => {
        return users.filter((el) => el._id !== userId);
    }

    const filterUsers = getFilterUsers(user._id);

    return <div className="suggestion-container">
        {
            filterUsers && filterUsers.map((user) => {
                return <div className="suggestion" key={user._id}>
                    <img src={require("../../images/Conor.png")} alt="user" />

                    {

                        user.followers && user.followers.length ? <button onClick={() => handleUnfollow(user._id)}>UNFOLLOW</button> :
                            <button onClick={() => handleFollow(user._id)}>FOLLOW</button>
                    }
                </div>
            })
        }
    </div>
}