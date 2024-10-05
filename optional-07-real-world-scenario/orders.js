// Gunakan fungsi di bawah ini untuk menghasilkan id yang unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = [];

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  const data = {
    id: generateUniqueId(),
    customerName: customerName,
    items: JSON.stringify(items),
    totalPrice: items.reduce((acc, item) => acc + item.price, 0),
    status: "Menunggu",
  };

  return orders.push(data);
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const item = orders.findIndex((item) => item.id === orderId);

  orders[item].status = status;
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  const orderDone = orders.filter((item) => item.status === "Selesai");

  return orderDone.reduce((acc, item) => acc + item.totalPrice, 0);
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const item = orders.findIndex((order) => order.id === id);

  return orders.splice(item, 1);
}

export {
  addOrder,
  calculateTotalRevenue,
  deleteOrder,
  orders,
  updateOrderStatus,
};
