import React from 'react';

const InventoryStats = ({ products }) => {
  const lowStockItems = products.filter(
    product => product.currentStock < product.minStock
  ).length;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-medium text-gray-500">Productos</h3>
        <p className="text-3xl font-bold mt-2">{products.length}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-medium text-gray-500">Stock Total</h3>
        <p className="text-3xl font-bold mt-2">
          {products.reduce((sum, product) => sum + product.currentStock, 0)}
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-lg font-medium text-gray-500">Bajo Stock</h3>
        <p className="text-3xl font-bold mt-2">{lowStockItems}</p>
      </div>
    </div>
  );
};

export default InventoryStats;