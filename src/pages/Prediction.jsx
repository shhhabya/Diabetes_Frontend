import { useState } from "react";
import Navbar from "../components/Navbar";

export default function Prediction() {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    dpf: "",
    age: "",
  });

  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false); // ✅ New loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // ✅ Start loading
    setResult(null);  // Clear previous result

    try {
      const response = await fetch(
        "https://diabetes-k80q.onrender.com/predict",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to fetch prediction");

      const data = await response.json();

      setResult(
        `Prediction: ${data.prediction === 1 ? "Diabetes" : "No Diabetes"} | Probability: ${data.probability}%`
      );
    } catch (error) {
      console.error(error);
      setResult("Error fetching prediction. Please try again later.");
    } finally {
      setLoading(false); // ✅ Stop loading
    }
  };

  return (
    <div className="predict-wrapper">
      <Navbar />
      <div className="form-container">
        <h1>Diabetes Prediction</h1>
        <form onSubmit={handleSubmit} className="predict-form">
          <input
            type="number"
            name="pregnancies"
            placeholder="Pregnancies"
            value={formData.pregnancies}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="glucose"
            placeholder="Glucose"
            value={formData.glucose}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="bloodPressure"
            placeholder="Blood Pressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="skinThickness"
            placeholder="Skin Thickness"
            value={formData.skinThickness}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="insulin"
            placeholder="Insulin"
            value={formData.insulin}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="bmi"
            placeholder="BMI"
            value={formData.bmi}
            onChange={handleChange}
            step="0.1"
            required
          />
          <input
            type="number"
            name="dpf"
            placeholder="Diabetes Pedigree Function"
            value={formData.dpf}
            onChange={handleChange}
            step="0.01"
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? "Predicting..." : "Predict Probability"} {/* ✅ Show loading */}
          </button>
        </form>

        {loading && (
          <div className="loading-spinner">
            ⏳ Loading...
          </div>
        )}

        {result && (
          <div className="result-box">
            <p>{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}
