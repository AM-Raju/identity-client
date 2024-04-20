import React from "react";

const OrderSummary = () => {
  return (
    <div className="bg-gray-100 p-8 ">
      <p>
        By placing your order, you agree to our company{" "}
        <span>Privacy policy</span> and <span>Condition of use</span>
      </p>
      <hr className="my-3" />
      <h3 className="text-2xl">Order Summary</h3>
      <div className="mt-5 space-y-2">
        <div className="flex justify-between">
          <p>Items(3)</p>
          <p>$56.76</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping and Handling</p>
          <p>$56.76</p>
        </div>
        <div className="flex justify-between">
          <p>Before Tax</p>
          <p>$56.76</p>
        </div>
        <div className="flex justify-between">
          <p>Tax Collected</p>
          <p>$56.76</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between">
        <h2 className="text-xl">Order Total</h2>
        <h2 className="text-xl">$56.76</h2>
      </div>
      <div className="flex items-center justify-center mt-8">
        <button className="px-6 py-3 rounded-full border-2 border-secondary hover:bg-secondary transition-all duration-300 text-secondary hover:text-primary w-72">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
