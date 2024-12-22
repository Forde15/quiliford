import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
        if (!response.ok) {
          throw new Error('Failed to fetch menu items');
        }
        const data = await response.json();
        const transformedData = data.map((item, index) => ({
          id: item.id,
          name: `Bag Type ${index + 1}`,
          description: item.title,
          image: `https://picsum.photos/seed/${item.id}/400/300`
        }));
        setMenuItems(transformedData);
      } catch (err) {
        setError('Failed to load menu items. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  if (isLoading) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold text-slate-800">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="text-2xl font-semibold text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-4xl font-bold text-center text-slate-800 mb-12">Our Menu</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={item.image} alt={item.name} className="w-full h-64 object-cover" />
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{}Comfortable and spacious for your daily needs</p>

                
                <button className="bg-slate-600 text-white py-2 px-4 rounded-full hover:bg-slate-500 transition duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/" className="bg-slate-600 text-white py-3 px-6 rounded-full text-lg transition duration-300 hover:bg-slate-500">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

