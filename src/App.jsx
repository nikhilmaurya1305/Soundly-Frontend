import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Playlists from "./pages/Playlists";
import UploadSong from "./pages/UploadSong";

function App() {
      return (
          <Routes>

                <Route path="/" element={<Home />} />

                <Route path="/login" element={<Login />} />

                <Route path="/register" element={<Register />} />

                <Route path="/profile" element={<Profile />} />

                <Route path="/playlists" element={<Playlists />} />

                <Route path="/upload" element={<UploadSong />} />

          </Routes>
      );
}

export default App;