import React from 'react';

const InventoryHeader = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">StockFlow</h1>
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors">
            Dashboard
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            Nuevo Requerimiento
          </button>
        </div>
      </div>
    </header>
  );
};

export default InventoryHeader;