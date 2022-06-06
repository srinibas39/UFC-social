import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CommentPage } from "./pages/CommentPage";
import { ExplorePage } from "./pages/ExplorePage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";
import { Error } from "./components/Error/Error";


export const App = () => {
  return <Routes>

    <Route path="*" element={<Error />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/profile/:userId" element={<ProfilePage />} />
    <Route path="/explore" element={<ExplorePage />} />
    <Route path="/comment/:postId" element={<CommentPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />


  </Routes>


}


export default App;
