import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-red-900 text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2024 FordeBag. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Facebook</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

