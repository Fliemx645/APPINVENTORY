export const updateStock = (products, productId, quantity) => {
  return products.map(product => {
    if (product.id === productId) {
      return {
        ...product,
        currentStock: product.currentStock + quantity
      };
    }
    return product;
  });
};

export const approveRequest = (requests, requestId) => {
  return requests.map(request => {
    if (request.id === requestId) {
      return {
        ...request,
        status: 'approved'
      };
    }
    return request;
  });
};

export const rejectRequest = (requests, requestId) => {
  return requests.map(request => {
    if (request.id === requestId) {
      return {
        ...request,
        status: 'rejected'
      };
    }
    return request;
  });
};