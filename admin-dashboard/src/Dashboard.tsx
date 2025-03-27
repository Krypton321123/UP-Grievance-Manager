import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

const Dashboard: React.FC = () => {
  const [newGrievances, setNewGrievances] = useState(0);
  const [pendingGrievances, setPendingGrievances] = useState(0);
  const [resolvedGrievances, setResolvedGrievances] = useState(0);
  const [grievanceHotspots, setGrievanceHotspots] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: any = await axios.get(`${import.meta.env.VITE_API}/admin/dashboard`)
        setNewGrievances(response.data.data.newGrievances.length);
        setPendingGrievances(response.data.data.pendingGrievances.length);
        setResolvedGrievances(response.data.data.resolvedGrievances.length);
      } catch (error) {
        console.error("Error fetching dashboard data", error);
      }
    };
    
    const mockHotspots = [
      { district: "Lucknow", latitude: 26.8467, longitude: 80.9462, grievanceType: "Road Infrastructure" },
      { district: "Kanpur", latitude: 26.4499, longitude: 80.3319, grievanceType: "Water Supply" },
      { district: "Varanasi", latitude: 25.3176, longitude: 82.9739, grievanceType: "Power Cuts" },
      { district: "Agra", latitude: 27.1767, longitude: 78.0081, grievanceType: "Sanitation" },
      { district: "Meerut", latitude: 28.9845, longitude: 77.7064, grievanceType: "Traffic Congestion" },
      { district: "Prayagraj", latitude: 25.4358, longitude: 81.8463, grievanceType: "Waste Management" },
      { district: "Gorakhpur", latitude: 26.7606, longitude: 83.3732, grievanceType: "Public Safety" },
      { district: "Noida", latitude: 28.5355, longitude: 77.3910, grievanceType: "Air Pollution" }
    ];
    
    setGrievanceHotspots(mockHotspots);
    fetchData();
  }, []);

  return (
    <div className="bg-blue-50 min-h-screen p-6 text-gray-900">
      <main>
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
          <h2 className="text-xl font-semibold">Grievance Hotspots in Uttar Pradesh</h2>
          <div className="mt-4 h-72">
            <MapContainer
              center={[26.8467, 80.9462]}
              zoom={6}
              className="h-full w-full rounded-md shadow"
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              {grievanceHotspots.map((hotspot, index) => (
                <Marker
                  key={index}
                  position={[hotspot.latitude, hotspot.longitude]}
                  icon={L.icon({
                    iconUrl: "https://leafletjs.com/examples/custom-icons/leaf-orange.png",
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                  })}
                >
                  <Popup>
                    <strong>{hotspot.district}</strong>
                    <br />
                    {hotspot.grievanceType}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;