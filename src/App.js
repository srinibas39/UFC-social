import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CommentPage } from "./pages/CommentPage";
import { ExplorePage } from "./pages/ExplorePage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";
import { SignupPage } from "./pages/SignupPage";
import { LoginPage } from "./pages/LoginPage";

export const App = () => {
  return <Routes>

    <Route path="/" element={<HomePage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/explore" element={<ExplorePage />} />
    <Route path="/comment" element={<CommentPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />

  </Routes>


}


export default App;
