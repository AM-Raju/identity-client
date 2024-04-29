import { TOrder } from "@/types/order.types";
import { FaTrash } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

const OrdersTableRow = ({ order }: { order: TOrder }) => {
  const {
    _id,
    orderedBy,
    orderInfo,
    payableAmount,
    paymentMethod,
    address,
    status,
  } = order;
  return (
    <tr>
      <td>{orderedBy}</td>
      <td className="flex  items-center  gap-4">
        <p className="w-5">{orderInfo.count} </p>
        <button className="flex bg-secondary px-3 py-2 justify-center items-center gap-2 hover:bg-amber-500 rounded-lg">
          <SlMagnifier />
        </button>
      </td>
      <td>{payableAmount.toFixed(2)}</td>
      <td>{paymentMethod}</td>
      <td className="flex items-center gap-4">
        <p className="w-16">{address.state} </p>
        <button className="flex bg-secondary px-3 py-2 justify-center items-center gap-2 hover:bg-amber-500 rounded-lg">
          <SlMagnifier />
        </button>
      </td>
      <td>{status}</td>
      <td className=" w-40">
        <button className=" bg-secondary hover:bg-amber-500 px-3 py-2 rounded-lg">
          Make Shipped
        </button>
      </td>

      <td className="flex justify-center items-center">
        <button>
          <FaTrash className="text-xl text-primary hover:text-red-900 transition-all duration-300 mt-2 "></FaTrash>
        </button>
      </td>
    </tr>
  );
};

export default OrdersTableRow;
