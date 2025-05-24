import React, { useState } from 'react';
import { products as initialProducts, requests as initialRequests } from './mock/products';
import { updateStock, approveRequest, rejectRequest } from './utils/inventoryHelpers';
import InventoryHeader from './components/InventoryHeader';
import InventoryStats from './components/InventoryStats';
import ProductTable from './components/ProductTable';
import RequestList from './components/RequestList';
import NewRequestModal from './components/NewRequestModal';

const App = () => {
  const [products, setProducts] = useState(initialProducts);
  const [requests, setRequests] = useState(initialRequests);
  const [showModal, setShowModal] = useState(false);

  const handleApprove = (requestId) => {
    const request = requests.find(r => r.id === requestId);
    if (request) {
      setProducts(updateStock(products, request.productId, -request.quantity));
      setRequests(approveRequest(requests, requestId));
    }
  };

  const handleReject = (requestId) => {
    setRequests(rejectRequest(requests, requestId));
  };

  const handleNewRequest = (newRequest) => {
    const newId = Math.max(...requests.map(r => r.id), 0) + 1;
    setRequests([...requests, { ...newRequest, id: newId }]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <InventoryHeader onNewRequestClick={() => setShowModal(true)} />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <InventoryStats products={products} />
        <ProductTable products={products} />
        <RequestList 
          requests={requests} 
          products={products} 
          onApprove={handleApprove}
          onReject={handleReject}
        />
      </main>
      {showModal && (
        <NewRequestModal
          products={products}
          onClose={() => setShowModal(false)}
          onSubmit={handleNewRequest}
        />
      )}
    </div>
  );
};

export default App;

// DONE