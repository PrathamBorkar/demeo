import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SellCarForm from "./sellcar";
import CarList from "./carlist";
import CarDetail from "./cardetail"; // Import the CarDetail component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Car Connect</h1>
        <SellCarForm />
        <Routes>
          <Route path="/" element={<CarList />} />
          <Route path="/cardetail/:id" element={<CarDetail />} /> {/* Route for car details */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
