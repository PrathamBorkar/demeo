import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SellCarForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    carName: "",
    kmsDriven: "",
    insuranceFile: null,
    rcFile: null,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted Successfully!");
    console.log("Form Data:", formData);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Sell Your Car At Ved Motors</h2>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light">
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">First Name *</label>
            <input
              type="text"
              className="form-control"
              name="firstName"
              placeholder="eg: Santosh"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Last Name *</label>
            <input
              type="text"
              className="form-control"
              name="lastName"
              placeholder="eg: Naik"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="eg: santoshn@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Phone *</label>
            <input
              type="tel"
              className="form-control"
              name="phone"
              placeholder="eg: 9876543210"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Name Of The Car *</label>
            <input
              type="text"
              className="form-control"
              name="carName"
              placeholder="eg: TATA Nexon EV XZ+ Prime"
              value={formData.carName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Total Kms Driven *</label>
            <input
              type="number"
              className="form-control"
              name="kmsDriven"
              placeholder="eg: 58000"
              value={formData.kmsDriven}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Insurance *</label>
            <input
              type="file"
              className="form-control"
              name="insuranceFile"
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">RC *</label>
            <input
              type="file"
              className="form-control"
              name="rcFile"
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Submit Application!
        </button>
      </form>
    </div>
  );
};

export default SellCarForm;