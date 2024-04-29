"use client";
import OrdersTableRow from "@/components/dashboard/dbOrders/OrdersTableRow";
import Loading from "@/components/shared/Loading";
import { useGetOrdersQuery } from "@/redux/api/orderApi";
import { TOrder } from "@/types/order.types";

const OrderPage = () => {
  const { data: orders, isLoading } = useGetOrdersQuery("");

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-4xl max-w-[95%] mx-auto my-8 font-semibold">
        All Orders
      </h2>
      <div className="overflow-x-auto max-w-[95%] mx-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-500 text-white text-lg tracking-wider">
            <tr>
              <th>Ordered By</th>
              <th>Order Quantity</th>
              <th>Bill</th>
              <th>Payment Method</th>
              <th>Address</th>
              <th>Status</th>
              <th className="text-center">Shipped</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders.map((order: TOrder) => (
              <OrdersTableRow key={order?._id} order={order}></OrdersTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderPage;
