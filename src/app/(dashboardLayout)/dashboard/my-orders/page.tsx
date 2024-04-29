"use client";
import MyOrdersTableRow from "@/components/dashboard/dbMyOrders/MyOrdersTableRow";
import Loading from "@/components/shared/Loading";
import { useMyOrdersQuery } from "@/redux/api/orderApi";
import { useAppSelector } from "@/redux/hook";
import { RootState } from "@/redux/store";
import { TOrder } from "@/types/order.types";

const MyOrderPage = () => {
  const { user } = useAppSelector((state: RootState) => state.user);
  const { data: myOrders, isLoading } = useMyOrdersQuery(user?.email);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h2 className="text-4xl max-w-[95%] mx-auto my-8 font-semibold">
        My Orders
      </h2>
      <div className="overflow-x-auto max-w-[95%] mx-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-500 text-white text-lg tracking-wider">
            <tr>
              <th>Order Id</th>
              <th>Order Quantity</th>
              <th>Bill</th>
              <th>Payment Method</th>
              <th>Address</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {myOrders.map((order: TOrder) => (
              <MyOrdersTableRow
                key={order?._id}
                order={order}
              ></MyOrdersTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrderPage;
