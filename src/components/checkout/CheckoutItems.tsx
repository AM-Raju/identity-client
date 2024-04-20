import Image from "next/image";
import { FaMinusCircle } from "react-icons/fa";

const CheckoutItems = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Qty</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>
              <div className="avatar">
                <div className="mask mask-squircle size-16">
                  <Image
                    src="https://i.ibb.co/L1dJSDF/2-0.jpg"
                    alt="Product Image"
                    width="100"
                    height="100"
                  />
                </div>
              </div>
            </td>
            <td>
              <h3>Product Name</h3>
            </td>
            <td>5</td>
            <th>
              <button className="flex items-center justify-center w-12">
                <FaMinusCircle className="text-primary text-xl" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CheckoutItems;
