import { useState } from "react";

const grievancesData = [
  { id: 1, title: "Delayed Passport", status: "Resolved", date: "2025-03-20" },
  { id: 2, title: "Road Repair Request", status: "Pending", date: "2025-03-22" },
  { id: 3, title: "Electricity Issue", status: "In Progress", date: "2025-03-25" },
];

const CheckPreviousGrievances = () => {
  const [search, setSearch] = useState("");

  const filteredGrievances = grievancesData.filter((g) =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-4">📜 Check Previous Grievances</h2>

      <input
        type="text"
        placeholder="Search grievances..."
        className="p-2 mb-4 w-full border rounded-md"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredGrievances.map((grievance) => (
            <tr key={grievance.id} className="border-b">
              <td className="p-3">{grievance.id}</td>
              <td className="p-3">{grievance.title}</td>
              <td className={`p-3 font-semibold ${getStatusColor(grievance.status)}`}>
                {grievance.status}
              </td>
              <td className="p-3">{grievance.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Function to style status
const getStatusColor = (status: string) => {
  switch (status) {
    case "Resolved":
      return "text-green-600";
    case "Pending":
      return "text-yellow-600";
    case "In Progress":
      return "text-blue-600";
    default:
      return "";
  }
};

export default CheckPreviousGrievances;
