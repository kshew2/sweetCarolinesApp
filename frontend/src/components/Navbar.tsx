// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../assets/sweetcarolinelogo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="bg-white-600 text-black py-2 px-4 shadow-md border-bottom border-b border-black-200 relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* <h1 className="text-xl font-bold">My App</h1> */}
        <img src={Logo} alt="Logo" className="h-20 p-0 m-0" />
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none bg-white border-black hover:bg-pink-100 hover:border-black"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <ul className={`md:flex gap-6 text-black py-2 px-5 bg-pink-100 rounded-full ${isOpen ? 'flex flex-col absolute top-full left-0 w-full bg-pink-100 p-4 rounded-none z-50' : 'hidden'}`}>
          <li><Link to="/" className="hover:text-pink-900 text-black block md:inline" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" className="hover:text-pink-900 text-black block md:inline" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/form" className="hover:text-pink-900 text-black block md:inline" onClick={() => setIsOpen(false)}>Order Forms & Pricing</Link></li>
          <li><Link to="/contact" className="hover:text-pink-900 text-black block md:inline" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
