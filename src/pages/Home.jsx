import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="form-container">
        <h1>Welcome to Diabetes Prediction</h1>
        <p>
          This tool predicts the probability of diabetes based on health inputs
          like glucose, blood pressure, BMI, and more.
        </p>
        {/* Redirect to login page instead of prediction */}
        <Link to="/login">
          <button>Get Started</button>
        </Link>
      </div>
    </div>
  );
}
