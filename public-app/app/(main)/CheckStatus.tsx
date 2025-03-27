import { useState } from "react";

const grievancesData = [
  { id: "GRV123", title: "Delayed Passport", status: "Resolved", date: "2025-03-20" },
  { id: "GRV456", title: "Road Repair Request", status: "Pending", date: "2025-03-22" },
  { id: "GRV789", title: "Electricity Issue", status: "In Progress", date: "2025-03-25" },
];

const CheckGrievanceStatus = () => {
  const [grievanceId, setGrievanceId] = useState("");
  const [grievance, setGrievance] = useState<any | null>(null);
  const [error, setError] = useState("");

  const handleCheckStatus = () => {
    const foundGrievance = grievancesData.find((g) => g.id === grievanceId.toUpperCase());

    if (foundGrievance) {
      setGrievance(foundGrievance);
      setError("");
    } else {
      setGrievance(null);
      setError("Grievance not found. Please check the ID and try again.");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">🔍 Check Grievance Status</h2>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <input
          type="text"
          placeholder="Enter Grievance ID..."
          className="p-2 w-full border rounded-md mb-3"
          value={grievanceId}
          onChange={(e) => setGrievanceId(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 w-full"
          onClick={handleCheckStatus}
        >
          Check Status
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {grievance && (
        <div className="bg-white p-4 rounded-lg shadow-md mt-4">
          <h3 className="text-xl font-semibold">{grievance.title}</h3>
          <p className="text-gray-600">Grievance ID: {grievance.id}</p>
          <p className="text-gray-600">Date Filed: {grievance.date}</p>
          <p className={`text-lg font-semibold mt-2 ${getStatusColor(grievance.status)}`}>
            Status: {grievance.status}
          </p>
        </div>
      )}
    </div>
  );
};

// Function to style status text
const getStatusColor = (status: string) => {
  switch (status) {
    case "Resolved":
      return "text-green-600";
    case "Pending":
      return "text-yellow-600";
    case "In Progress":
      return "text-blue-600";
    default:
      return "text-gray-600";
  }
};

export default CheckGrievanceStatus;
