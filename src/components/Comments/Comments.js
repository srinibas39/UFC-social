import { Comment } from "../Comment/Comment"
import { UserPost } from "../UserPost/UserPost"


export const Comments = () => {
    return <div className="comments-container">
        <UserPost />
        <Comment/>
    </div>
}