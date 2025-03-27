import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('logged-in')

    isLoggedIn === 'true' ? setLoggedIn(true) : setLoggedIn(false)
  }, [])

  return (
    <header className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-1 py-4 flex justify-between items-center">
        
      
        <Link to="/" className="text-2xl font-bold text-blue-600">
          UP IGRS
        </Link>

       
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link to="/" className="hover:text-blue-600 transition">Home</Link>
          <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
          <Link to="/reports" className="hover:text-blue-600 transition">Reports</Link>
          <Link to="/support" className="hover:text-blue-600 transition">Support</Link>
        </nav>

        
        <Link to="/login" className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          {loggedIn ? "Logout" : "Login"}
        </Link>


        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-800 text-2xl">
          {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

    
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md absolute top-full left-0 w-full py-4">
          <nav className="flex flex-col items-center space-y-4 text-gray-700">
            <Link to="/" className="hover:text-blue-600 transition">Home</Link>
            <Link to="/dashboard" className="hover:text-blue-600 transition">Dashboard</Link>
            <Link to="/reports" className="hover:text-blue-600 transition">Reports</Link>
            <Link to="/support" className="hover:text-blue-600 transition">Support</Link>
            <Link to="/login" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Login
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
