import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Level from "./pages/Level";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Leaderboard from "./pages/Leaderboard";
import LevelMap from "./pages/LevelMap";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/level/:id" element={<Level />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signout" element={<SignOut />} />
        <Route path="/levelmap" element={<LevelMap />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
