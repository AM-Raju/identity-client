import { TOrder } from "@/types/order.types";
import { FaTrash } from "react-icons/fa";
import { SlMagnifier } from "react-icons/sl";

const MyOrdersTableRow = ({ order }: { order: TOrder }) => {
  const { _id, orderInfo, payableAmount, paymentMethod, address, status } =
    order;
  return (
    <tr>
      <td>{_id}</td>
      <td className="flex  items-center  gap-4">
        {orderInfo.count}{" "}
        <button className="flex bg-secondary px-3 py-2 justify-center items-center gap-2 hover:bg-amber-500 rounded-lg">
          <SlMagnifier />
        </button>
      </td>
      <td>{payableAmount.toFixed(2)}</td>
      <td>{paymentMethod}</td>
      <td className="flex items-center gap-4">
        {address.state}{" "}
        <button className="flex bg-secondary px-3 py-2 justify-center items-center gap-2 hover:bg-amber-500 rounded-lg">
          <SlMagnifier />
        </button>
      </td>
      <td>{status}</td>
    </tr>
  );
};

export default MyOrdersTableRow;
