import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Maps from "./pages/Maps";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Tickets from "./pages/Tickets";
import Likes from "./pages/Likes";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/maps" element={<Maps />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/likes" element={<Likes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
