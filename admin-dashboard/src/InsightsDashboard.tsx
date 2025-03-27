import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const resolutionData = [
  { week: "Week 1", count: 200 },
  { week: "Week 2", count: 250 },
  { week: "Week 3", count: 220 },
  { week: "Week 4", count: 270 },
];

const sentimentData = [
  { type: "Positive", count: 30 },
  { type: "Neutral", count: 50 },
  { type: "Negative", count: 20 },
];

const categoryData = [
  { category: "Housing", count: 400 },
  { category: "Infrastructure", count: 350 },
  { category: "Education", count: 300 },
  { category: "Healthcare", count: 250 },
];

const InsightsDashboard = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen text-gray-900">
      <h2 className="text-2xl font-bold mb-4 text-center">Grievance Resolution Efficiency</h2>

      <div className="flex flex-wrap justify-around gap-6">
        <div className="bg-white shadow-md p-4 rounded-md text-center w-52">
          <p className="text-gray-600">Total Grievances Resolved</p>
          <p className="text-xl font-bold">1,254</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-md text-center w-52">
          <p className="text-gray-600">Avg. Resolution Time (Days)</p>
          <p className="text-xl font-bold">7.3</p>
        </div>
        <div className="bg-white shadow-md p-4 rounded-md text-center w-52">
          <p className="text-gray-600">Citizen Satisfaction Rate</p>
          <p className="text-xl font-bold">85%</p>
        </div>
      </div>

      <div className="mt-6 space-y-6">
        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Sentiment Analysis</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={sentimentData}>
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#3182CE" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Resolution Timeline</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={resolutionData}>
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#3182CE" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white shadow-md p-4 rounded-md">
          <h3 className="text-lg font-semibold mb-2">Category Breakdown</h3>
          {categoryData.map((item) => (
            <div key={item.category} className="flex justify-between items-center mb-2">
              <p>{item.category}</p>
              <div className="w-2/3 bg-gray-300 rounded-full h-2">
                <div
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(item.count / 400) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsightsDashboard;