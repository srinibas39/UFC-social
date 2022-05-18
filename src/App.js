import { Route, Routes } from "react-router-dom";
import "./App.css";
import { CommentPage } from "./pages/CommentPage";
import { ExplorePage } from "./pages/ExplorePage";
import { HomePage } from "./pages/HomePage";
import { ProfilePage } from "./pages/ProfilePage";

export const App = () => {
  return <Routes>

    <Route path="/" element={<HomePage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/explore" element={<ExplorePage />} />
    <Route path="/comment" element={<CommentPage />} />





  </Routes>


}


export default App;
