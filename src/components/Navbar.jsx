import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    navigate("/");
  };

  // ✅ Only render Welcome + Logout if logged in
  if (!isLoggedIn) return null;

  return (
    <div className="navbar">
      <span className="welcome-text">Welcome, {username}</span>
      <span onClick={handleLogout} className="nav-link">Logout</span>
    </div>
  );
}
