import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from 'axios'

const Dashboard: React.FC = () => {

  const [newGrievances, setNewGrievances] = useState(0); 
  const [pendingGrievances, setPendingGrievances] = useState(0); 
  const [resolvedGrievances, setResolvedGrievances] = useState(0); 

  useEffect(() => {

    const fetchData = async () => {
      const response: any = await axios.get(`${import.meta.env.VITE_API}/admin/dashboard`); 

      setNewGrievances(response.data.data.newGrievances.length)
      setPendingGrievances(response.data.data.pendingGrievances.length)
      setResolvedGrievances(response.data.data.resolvedGrievances.length)

      console.log(newGrievances)

      console.log(response)

    }

    fetchData(); 

  }, [])

  return (
    <div className="bg-blue-50 min-h-screen p-6 text-gray-900">
      <aside className="fixed left-0 top-0 h-full w-64 bg-white p-4 shadow-md">
        <h2 className="text-xl font-bold text-blue-700">Grievance Portal</h2>
        <nav className="mt-6">
          <ul>
            <li className="p-2 rounded-md hover:bg-blue-100">Dashboard</li>
            <li className="p-2 rounded-md hover:bg-blue-100">Grievances</li>
            <li className="p-2 rounded-md hover:bg-blue-100">Insights</li>
            <li className="p-2 rounded-md hover:bg-blue-100">Settings</li>
          </ul>
        </nav>
      </aside>

      <main className="ml-72">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-gray-600">Summary of grievance activity and insights.</p>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">New Grievances</h3>
            <p className="text-2xl font-bold text-blue-700">{newGrievances}</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">Pending Grievances</h3>
            <p className="text-2xl font-bold text-blue-700">{pendingGrievances}</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="text-lg font-semibold">Resolved Grievances</h3>
            <p className="text-2xl font-bold text-blue-700">{resolvedGrievances}</p>
          </div>
        </div>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">Geographic Hotspots</h2>
          <div className="mt-4 h-72">
            <MapContainer center={[38.9072, -77.0369]} zoom={13} className="h-full w-full rounded-md shadow">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            </MapContainer>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold">AI Insights</h2>
          <ul className="mt-4 space-y-2">
            <li className="bg-white p-4 rounded shadow">
              <strong>Noise Complaints Spike in Meadowbrook</strong>
              <p className="text-gray-600">A noticeable increase in noise complaints near Meadowbrook.</p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <strong>Link Found Between Gatherings & Nuisance Reports</strong>
              <p className="text-gray-600">Public events seem linked to nuisance reports.</p>
            </li>
            <li className="bg-white p-4 rounded shadow">
              <strong>Recommendation: Community Engagement</strong>
              <p className="text-gray-600">Consider focused outreach initiatives.</p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
