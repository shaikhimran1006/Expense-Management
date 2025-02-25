import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomerMenu = () => {
  const [formData, setFormData] = useState({
    user: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.user ||
      !formData.amount ||
      !formData.date ||
      !formData.category ||
      !formData.description
    ) {
      setShowAlert(true);
      return;
    }
    alert("Expense Created Successfully!");
  };

  return (
    <div
      className="d-flex"
      style={{
        backgroundImage: "url('/Background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "#fff",
      }}
    >
      {/* Sidebar */}
      <div
        className="d-flex flex-column p-3"
        style={{
          width: "250px",
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          minHeight: "100vh",
          borderRight: "2px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <h4 className="text-white text-center mb-4">
          <b>💲 EMS</b>
        </h4>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link text-white active bg-primary rounded">
              Expenses
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">Category</a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white">Reports</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container-fluid p-4">
        <h2 className="text-center" style={{ textShadow: "0 0 10px #00ffff" }}>
          <b>🏦 Expense Management System</b>
        </h2>
        <div
          className="card p-4 mt-3"
          style={{
            background: "rgba(0, 0, 50, 0.5)",
            backdropFilter: "blur(15px)",
            borderRadius: "10px",
            boxShadow: "0 0 20px rgba(0, 255, 255, 0.3)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="text-white">User*</label>
                <select
                  name="user"
                  className="form-control bg-transparent text-white border-light"
                  onChange={handleChange}
                  style={{ color: "#fff" }}
                >
                  <option value="" style={{ color: "#000" }}>Select User</option>
                  <option value="User 1" style={{ color: "#000" }}>imran</option>
                </select>
              </div>
              <div className="col-md-6 mb-3">
                <label className="text-white">Amount*</label>
                <input
                  type="number"
                  name="amount"
                  placeholder="Enter amount"
                  className="form-control bg-transparent border-light"
                  style={{ color: "#fff", "::placeholder": { color: "#ffffff" } }}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="text-white">Date*</label>
                <input
                  type="date"
                  name="date"
                  className="form-control bg-transparent border-light"
                  style={{ color: "#fff" }}
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="text-white">Category*</label>
                <select
                  name="category"
                  className="form-control bg-transparent text-white border-light"
                  onChange={handleChange}
                  style={{ color: "#fff" }}
                >
                  <option value="" style={{ color: "#000" }}>Select Category</option>
                  <option value="Food" style={{ color: "#000" }}>Food</option>
                  <option value="Transport" style={{ color: "#000" }}>Transport</option>
                  <option value="Shopping" style={{ color: "#000" }}>Shopping</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label className="text-white">Description*</label>
              <textarea
                name="description"
                placeholder="Enter description"
                className="form-control bg-transparent border-light"
                rows="3"
                style={{ color: "#fff", "::placeholder": { color: "#fff" } }}
                onChange={handleChange}
              />
            </div>

            <button
              className="btn w-100 rounded-pill"
              style={{
                background: "linear-gradient(to right, #00c6ff, #0072ff)",
                color: "#fff",
                fontWeight: "bold",
                boxShadow: "0 0 15px #00c6ff",
              }}
            >
              Create
            </button>
          </form>
        </div>
      </div>

      {/* Alert for Validation */}
      {showAlert && (
        <div
          className="alert alert-dark position-fixed bottom-0 start-50 translate-middle-x"
          role="alert"
          style={{ width: "300px" }}
        >
          Please fill the mandatory fields
          <button
            type="button"
            className="btn-close float-end"
            aria-label="Close"
            onClick={() => setShowAlert(false)}
          ></button>
        </div>
      )}
    </div>
  );
};

export default CustomerMenu;
