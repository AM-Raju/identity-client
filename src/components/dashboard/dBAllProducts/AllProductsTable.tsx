import AllProductsTableRow from "./AllProductsTableRow";
import { TDress } from "@/types/dress.types";

const AllProductsTable = ({ products }: { products: TDress[] }) => {
  return (
    <div className="overflow-x-auto max-w-[95%] mx-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-gray-500 text-white text-lg tracking-wider">
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Category</th>
            <th>Type</th>
            <th>Price</th>
            <th>Rating</th>
            <th>Review</th>
            <th>Discount</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {products.map((product) => (
            <AllProductsTableRow
              key={product._id}
              product={product}
            ></AllProductsTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllProductsTable;
