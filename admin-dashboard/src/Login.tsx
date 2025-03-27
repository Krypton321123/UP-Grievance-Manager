import { MouseEvent, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState(''); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e: MouseEvent<HTMLElement>) => { 
    e.preventDefault(); 

    try {
        if (username.trim() === '' || password.trim() === '') {
            return alert('Input fields are empty')
        }

        const response: any = await axios.post(`${import.meta.env.VITE_API}/admin/login`, {username: username.trim(), password: password.trim()}); 
        console.log(response.status === 200)
        if (response.status === 200) {
            localStorage.setItem('logged-in', 'true'); 
            navigate('/dashboard')
        }
    } catch (err) {

    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        
        
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input 
              type="text" 
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              placeholder="Enter your username" 
              required
              onChange={(e: any) => {setUsername(e.target.value)}}
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium">Password</label>
            <input 
              type={showPassword ? "text" : "password"} 
              className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none" 
              placeholder="Enter your password" 
              required
              onChange={(e: any) => {setPassword(e.target.value)}}
            />
            <button
              type="button"
              className="absolute top-9 right-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>


          <button
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Login
          </button>
      </div>
    </div>
  );
}

export default Login;