import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  const handleAboutUsClick = (e) => {
    e.preventDefault();
    const aboutUsSection = document.getElementById('about-us');
    if (aboutUsSection) {
      aboutUsSection.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname !== '/') {
      window.location.href = '/#about-us';
    }
  };

  return (
    <nav className="bg-slate-600 py-4 px-6 flex justify-between items-center">
      <div className="text-white text-2xl font-semibold">
        <h1>FordeBag</h1>
      </div>
      <ul className="flex space-x-6">
        <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
        <li><Link to="/menu" className="text-white hover:text-gray-300">Menu</Link></li>
        <li><a href="/#about-us" className="text-white hover:text-gray-300" onClick={handleAboutUsClick}>About Us</a></li>
      </ul>
    </nav>
  );
};

export default Header;

