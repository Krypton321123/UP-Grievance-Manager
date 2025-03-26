import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import HeroSection from "./HeroSection";
import PendingGrievances from "./PendingGrievencies";
import InsightsDashboard from "./InsightsDashboard";

const Home = () => <h1 className="text-3xl text-center mt-10">Welcome to UP IGRS</h1>;
const Reports = () => <h1 className="text-3xl text-center mt-10">Reports</h1>;
const Support = () => <h1 className="text-3xl text-center mt-10">Support</h1>;
const Login = () => <h1 className="text-3xl text-center mt-10">Login Page</h1>;

const App = () => {
  return (
    <Router>
      <Header />
      <main className="pt-16"> {/* Adjust for fixed header */}
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/support" element={<Support />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Pending" element={<PendingGrievances />} />
          <Route path="/insights" element = {<InsightsDashboard />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
