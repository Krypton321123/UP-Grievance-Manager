import { motion } from "framer-motion";
import { FaCheckCircle, FaExclamationTriangle, FaUsers, FaClipboardList } from "react-icons/fa";

const HeroSection = () => {
  // Hardcoded Stats
  const totalGrievances = 245;
  const pendingGrievances = 78;
  const resolvedGrievances = 167;
  const usersCount = 520;

  return (
    <section className="bg-gray-100 pt-20 h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        
        {/* Left Side - Image with Animation */}
        <motion.div 
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="./ai.jpg"
            alt="AI Dashboard"
            className="rounded-none shadow-md w-full md:max-w-md"
          />
        </motion.div>

        {/* Right Side - Text & Stats with Animation */}
        <motion.div 
          className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            AI Powered <span className="text-blue-700">Grievence Addressal System</span>
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Manage grievances efficiently with AI-powered insights.
          </p>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 mt-6">
            {[ 
              { icon: FaClipboardList, count: totalGrievances, label: "Total Grievances", color: "text-blue-600" },
              { icon: FaExclamationTriangle, count: pendingGrievances, label: "Pending Grievances", color: "text-yellow-600" },
              { icon: FaCheckCircle, count: resolvedGrievances, label: "Resolved Cases", color: "text-green-600" },
              { icon: FaUsers, count: usersCount, label: "Registered Users", color: "text-purple-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-4 bg-white text-gray-800 rounded-xl flex items-center space-x-4 shadow-md"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <item.icon className={`${item.color} text-3xl`} />
                <div>
                  <h2 className="text-xl font-bold">{item.count}</h2>
                  <p className="text-sm">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons with Animation */}
          <motion.div 
            className="mt-6 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700">
              View Complaints
            </button>
            <button className="bg-gray-700 text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800">
              Manage Users
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
