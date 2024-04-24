"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { clearCart, getTotals } from "@/redux/slices/cartSlice";
import React from "react";

const OrderSummary = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const shippingCharge = 50;
  const beforeTax = 20.75;
  const tax = (cart?.cartTotalAmount * 5) / 100;
  const orderTotal = cart?.cartTotalAmount + shippingCharge + beforeTax + tax;

  const handleClearCart = () => {
    dispatch(clearCart());
    dispatch(getTotals());
  };

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
          <p>Items({cart?.cartTotalQuantity})</p>
          <p>${cart?.cartTotalAmount}</p>
        </div>
        <div className="flex justify-between">
          <p>Shipping and Handling</p>
          <p>${shippingCharge}</p>
        </div>
        <div className="flex justify-between">
          <p>Before Tax</p>
          <p>${beforeTax}</p>
        </div>
        <div className="flex justify-between">
          <p>Tax Collected</p>
          <p>${tax.toFixed(2)}</p>
        </div>
      </div>
      <hr className="my-3" />
      <div className="flex justify-between">
        <h2 className="text-xl">Order Total</h2>
        <h2 className="text-xl">${orderTotal.toFixed(2)}</h2>
      </div>
      <div className="grid grid-cols-3 mt-8 gap-6">
        <button
          onClick={handleClearCart}
          className="px-6 py-3 rounded-full border-2 border-gray-300 hover:bg-gray-300 transition-all duration-300 text-secondary hover:text-primary col-span-1"
        >
          Clear Cart
        </button>
        <button className="px-6 py-3 rounded-full border-2 border-secondary hover:bg-secondary transition-all duration-300 text-secondary hover:text-primary col-span-2">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default OrderSummary;
