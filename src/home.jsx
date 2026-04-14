import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  return (
    <div className="card">
      <h1>🎉 Student Event Manager</h1>

      <p style={{ marginBottom: "10px" }}>
        Organize and manage your college events easily!
      </p>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3 style={{ marginTop: "15px" }}>
        Welcome, {name || "Student"} 👋
      </h3>

      <button onClick={() => navigate("/events")}>
        Go to Events 🚀
      </button>

      {/* Stats Section */}
      <div className="stats">
        <div className="stat-box">
          <h2>3</h2>
          <p>Events</p>
        </div>
        <div className="stat-box">
          <h2>🎯</h2>
          <p>Manage Easily</p>
        </div>
      </div>
    </div>
  );
}

export default Home;