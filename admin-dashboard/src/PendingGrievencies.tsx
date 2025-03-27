import React from "react";

const PendingGrievances = () => {
  const grievances = [
    { id: "G-2024-00123", category: "Road Maintenance", location: "Ward 7", citizen: "Ethan Moore", date: "2024-07-15", status: "Open" },
    { id: "G-2024-00124", category: "Water Supply", location: "Ward 2", citizen: "Olivia Harper", date: "2024-07-14", status: "Open" },
    { id: "G-2024-00125", category: "Street Lighting", location: "Ward 5", citizen: "Alexander Bennett", date: "2024-07-13", status: "In Progress" },
    { id: "G-2024-00126", category: "Waste Management", location: "Ward 10", citizen: "Sophia Carter", date: "2024-07-12", status: "Open" },
    { id: "G-2024-00127", category: "Public Transport", location: "Ward 3", citizen: "Liam Clark", date: "2024-07-11", status: "Open" },
    { id: "G-2024-00128", category: "Noise Complaint", location: "Ward 8", citizen: "Ava Davies", date: "2024-07-10", status: "In Progress" },
    { id: "G-2024-00129", category: "Illegal Parking", location: "Ward 1", citizen: "Noah Edwards", date: "2024-07-09", status: "Open" },
    { id: "G-2024-00130", category: "Traffic Signals", location: "Ward 6", citizen: "Isabella Ford", date: "2024-07-08", status: "Open" },
    { id: "G-2024-00131", category: "Property Damage", location: "Ward 4", citizen: "Mia Green", date: "2024-07-07", status: "In Progress" },
  ];

  return (
    <div className="ml-64 p-6 bg-gray-100 min-h-screen text-gray-900">
      <h1 className="text-3xl font-bold">Pending Grievances</h1>
      <input
        type="text"
        placeholder="Search by ID or keyword"
        className="mt-4 w-full p-2 rounded-md border border-gray-300"
      />
      <div className="flex gap-4 mt-4">
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md">Category</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md">Location</button>
        <button className="px-4 py-2 bg-gray-800 text-white rounded-md">Urgency</button>
      </div>

      <div className="mt-6 bg-white shadow rounded-md overflow-hidden">
        <table className="w-full border-collapse">
          <thead className="bg-gray-900 text-white">
            <tr>
              <th className="p-3">ID</th>
              <th className="p-3">Category</th>
              <th className="p-3">Location</th>
              <th className="p-3">Citizen</th>
              <th className="p-3">Submitted</th>
              <th className="p-3">Status</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {grievances.map((grievance, index) => (
              <tr key={index} className="border-b hover:bg-gray-100">
                <td className="p-3">{grievance.id}</td>
                <td className="p-3">
                  <span className="bg-gray-200 px-2 py-1 rounded">{grievance.category}</span>
                </td>
                <td className="p-3">{grievance.location}</td>
                <td className="p-3">{grievance.citizen}</td>
                <td className="p-3">{grievance.date}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-md text-white ${
                      grievance.status === "Open"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {grievance.status}
                  </span>
                </td>
                <td className="p-3">
                  <button className="text-blue-600">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingGrievances;