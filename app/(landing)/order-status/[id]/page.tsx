"use client";

import { useState } from "react";
import OrderConfirmed from "../../components/order-status/order-confirmed";
import OrderSubmitted from "../../components/order-status/order-submited";

const OrderStatus = () => {
  const [isConfirmed, setIsConfirmed] = useState(true);

  return (
    <main className="bg-gray-100 min-h-[80vh] p-18">
      <div className="max-w-5xl mx-auto mb-10">
        <h1 className="text-5xl font-bold text-center">Order Status</h1>
      </div>
      {isConfirmed ? <OrderConfirmed /> : <OrderSubmitted />}
    </main>
  );
};

export default OrderStatus;
