import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { follow, getAllUsers, unfollowUser } from "../../features/UserSlice";
import { handleToast } from "../../utils/toastUtils";
import "./Suggestion.css"

export const Suggestion = () => {
    const dispatch = useDispatch();

    const { users } = useSelector((state) => state.users);
    const { user } = useSelector((state) => state.auth);
    const { mode } = useSelector((state) => state.mode)


    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const { token } = useSelector((state) => state.auth);

    const handleFollow = (user) => {
        handleToast(`${user.username} followed `)
        setTimeout(() => {
            dispatch(follow({ token, userId: user._id }));
            dispatch(getAllUsers())
        }, 1000)


    }
    const handleUnfollow = (user) => {
        handleToast(`${user.username} followed `)
        setTimeout(() => {
            dispatch(unfollowUser({ token, user:user._id }));
            dispatch(getAllUsers())
        }, 1000)

    }

    const getFilterUsers = (userId) => {
        return users.filter((el) => el._id !== userId);
    }

    const filterUsers = getFilterUsers(user._id);

    return <div className="suggestion-container" id={mode ? "dark-mode" : ""}>
        {
            filterUsers && filterUsers.map((user) => {
                return <div className="suggestion" key={user._id}>
                    <img src={user.image} alt="user" />

                    {

                        user.followers && user.followers.length ? <button onClick={() => handleUnfollow(user)}>UNFOLLOW</button> :
                            <button onClick={() => handleFollow(user)}>FOLLOW</button>
                    }
                </div>
            })
        }
    </div>
}