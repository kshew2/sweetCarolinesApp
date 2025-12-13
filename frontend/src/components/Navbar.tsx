// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white-600 text-black p-4 shadow-md border-bottom border-b border-black-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My App</h1>
        <ul className="flex gap-6 text-black py-2 px-5 bg-pink-200 rounded-full">
          <li><Link to="/" className="hover:text-pink-900 text-black">Home</Link></li>
          <li><Link to="/about" className="hover:text-pink-900 text-black">About</Link></li>
          <li><Link to="/form" className="hover:text-pink-900 text-black">Form</Link></li>
          <li><Link to="/contact" className="hover:text-pink-900 text-black">Contact</Link></li>
          
        </ul>
      </div>
    </nav>
  );
}
