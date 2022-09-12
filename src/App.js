import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CommentPage } from "./pages/CommentPage";
import { ExplorePage } from "./pages/ExplorePage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { Error } from "./components/Error/Error";
import { RequiresAuth } from "./RequiresAuth/RequiresAuth";
import { useDispatch, useSelector } from "react-redux";
import { CommentEdit } from "./components/CommentEdit/CommentEdit";
import { useEffect } from "react";
import { getAllUsers } from "./features/UserSlice";


export const App = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers())
  }, [])
  return <Routes>

    <Route path="*" element={<Error />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/profile/:userId" element={<RequiresAuth token={token}><ProfilePage /></RequiresAuth>} />
    <Route path="/explore" element={<RequiresAuth token={token}><ExplorePage /></RequiresAuth>} />
    <Route path="/comment/:postId" element={<RequiresAuth token={token}><CommentPage /></RequiresAuth>} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
  </Routes>


}


export default App;
