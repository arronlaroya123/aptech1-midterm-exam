import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./page/Home";
import Signup from "./page/Signup";
import Success from "./page/Success";
import Profile from "./page/profile";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/signup">Signup</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/success" element={<Success />} />
        <Route path="/profile/:username" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
