import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import Events from "./Events";
import About from "./About";
import "./App.css";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <h2>Event Manager 🎉</h2>
        <div>
          <NavLink to="/" className="link">Home</NavLink>
          <NavLink to="/events" className="link">Events</NavLink>
          <NavLink to="/about" className="link">About</NavLink>
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;