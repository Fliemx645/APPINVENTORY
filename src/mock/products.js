const products = [
  {
    id: 1,
    name: "Monitor 24\"",
    category: "Tecnología",
    currentStock: 15,
    minStock: 5
  },
  {
    id: 2,
    name: "Teclado mecánico",
    category: "Tecnología",
    currentStock: 8,
    minStock: 3
  },
  {
    id: 3,
    name: "Silla ergonómica",
    category: "Mobiliario",
    currentStock: 4,
    minStock: 2
  }
];

const requests = [
  {
    id: 1,
    productId: 2,
    quantity: 5,
    requester: "Juan Pérez",
    status: "pending",
    date: "2023-05-15"
  },
  {
    id: 2,
    productId: 3,
    quantity: 2,
    requester: "María García",
    status: "approved",
    date: "2023-05-16"
  }
];

export { products, requests };