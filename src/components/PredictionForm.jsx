export default function Predict() {
  return (
    <div className="predict-page">
      <div className="form-container">
        <h2>Diabetes Prediction</h2>
        <form>
          <input type="number" placeholder="Pregnancies" />
          <input type="number" placeholder="Glucose" />
          <input type="number" placeholder="Blood Pressure" />
          <input type="number" placeholder="Skin Thickness" />
          <input type="number" placeholder="Insulin" />
          <input type="number" placeholder="BMI" />
          <input type="number" placeholder="Diabetes Pedigree Function" />
          <input type="number" placeholder="Age" />
          <button type="submit">Predict Probability</button>
        </form>
      </div>
    </div>
  );
}
