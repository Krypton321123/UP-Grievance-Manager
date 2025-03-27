import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import HeroSection from "./HeroSection";
import PendingGrievances from "./PendingGrievencies";
import InsightsDashboard from "./InsightsDashboard";
import Login from "./Login";
import { useEffect, useState } from "react";


const Home = () => <h1 className="text-3xl text-center mt-10">Welcome to UP IGRS</h1>;
const Reports = () => <h1 className="text-3xl text-center mt-10">Reports</h1>;
const Support = () => <h1 className="text-3xl text-center mt-10">Support</h1>;


const App = () => {

 
  return (
    <Router>
       <Header />
      <main className="pt-16"> 
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/support" element={<Support />} />
          <Route path="/Pending" element={<PendingGrievances />} />
          <Route path="/insights" element = {<InsightsDashboard />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
