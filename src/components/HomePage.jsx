import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="bg-cover bg-center h-screen flex items-center justify-center relative" style={{ backgroundImage: "url('haha.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10">
          <h1 className="text-5xl font-extrabold mb-4">Step Up Your Style with Premium Bags</h1>
          <p className="text-lg font-light mb-8">
            Explore our collection of stylish, durable, and functional bags for every occasion.
          </p>
          <Link
            to="/menu"
            className="bg-slate-600 text-white py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-slate-400 inline-block"
          >
            Explore Our Menu
          </Link>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-16 bg-gray-100">
        <h2 className="text-3xl text-center font-semibold mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img src="bag3.jpg" alt="Backpacks" className="w-full h-50 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">Backpacks</h3>
              <p className="text-gray-900 mb-4">Comfortable and spacious for your daily needs.</p>
              <button className="bg-slate-600 text-white py-1 px-4  rounded-full hover:bg-slate-400">
                Shop Now
              </button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img src="bag4.jpg" alt="Handbags" className="w-full h-50 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">Handbags</h3>
              <p className="text-gray-900 mb-4">Elegant and versatile for any occasion.</p>
              <button className="bg-slate-600 text-white py-2 px-6 rounded-full hover:bg-slate-400">
                Shop Now
              </button>
            </div>
          </div>
          <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
            <img src="bag5.jpg" alt="Duffel Bags" className="w-full h-50 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-900">Duffel Bags</h3>
              <p className="text-gray-600 mb-4">Perfect for travel or the gym, combining style and function.</p>
              <button className="bg-slate-600 text-white py-2 px-6 rounded-full hover:bg-slate-400">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="py-16 bg-slate-600 scroll-mt-16">
        <h2 className="text-3xl text-center font-semibold mb-12 text-white">Why Choose Us?</h2>
        <div className="flex flex-wrap justify-center gap-8 px-6">
          <div className="w-full sm:w-1/3 text-center bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">Quality Materials</h3>
            <p className="text-gray-800">We use only the best materials for durability and comfort.</p>
          </div>
          <div className="w-full sm:w-1/3 text-center bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">Modern Design</h3>
            <p className="text-gray-800">Fashion-forward designs that complement your lifestyle.</p>
          </div>
          <div className="w-full sm:w-1/3 text-center bg-gray-200 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">Eco-Friendly</h3>
            <p className="text-gray-800">Our bags are made with sustainable practices to protect the planet.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;

