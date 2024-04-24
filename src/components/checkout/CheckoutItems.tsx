"use client";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "@/redux/slices/cartSlice";
import { TCartItem } from "@/types/cart.types";

import { FaMinusCircle } from "react-icons/fa";

const CheckoutItems = () => {
  const cart = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const increaseItemQuantity = (item: TCartItem) => {
    dispatch(addToCart(item));
    dispatch(getTotals());
  };

  const decreaseItemQuantity = (item: TCartItem) => {
    dispatch(decreaseCart(item));
    dispatch(getTotals());
  };

  const removeItem = (item: TCartItem) => {
    dispatch(removeFromCart(item));
    dispatch(getTotals());
  };
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th className="text-center">Qty</th>
            <th>Unit Price</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cart.cartItems.map((item: TCartItem) => (
            <tr key={item?._id}>
              <td>
                <div className="avatar">
                  <div className="mask mask-squircle size-16">
                    <img src={item?.img} alt="Product Image" />
                  </div>
                </div>
              </td>
              <td>
                <h3>{item?.title}</h3>
              </td>
              <td>
                <div className="flex justify-around items-center border border-gray-300 w-16">
                  <button
                    onClick={() => {
                      decreaseItemQuantity(item);
                    }}
                    className="text-2xl"
                  >
                    -
                  </button>
                  <p>{item.qty}</p>
                  <button
                    onClick={() => {
                      increaseItemQuantity(item);
                    }}
                    className="text-xl"
                  >
                    +
                  </button>
                </div>
              </td>
              <td>
                <p>${item.price}</p>
              </td>
              <td>
                <button
                  onClick={() => {
                    removeItem(item);
                  }}
                  className="flex items-center justify-center w-12"
                >
                  <FaMinusCircle className="text-primary text-xl" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutItems;
