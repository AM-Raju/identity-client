"use client";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ShippingAddress = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FieldValues>();
  const handleShippingAddress: SubmitHandler<FieldValues> = (data) =>
    console.log("Shipping Address", data);
  return (
    <div className="border-2 rounded-lg p-8">
      <h3 className="mb-5 text-xl">Shipping Address</h3>
      <form onSubmit={handleSubmit(handleShippingAddress)}>
        <div className="space-y-5">
          {/* Row 1 */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm" htmlFor="">
                First Name<span className="text-red-500">*</span>
              </label>
              <input
                className="border px-3 py-2 w-full outline-none "
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-xs text-red-400">
                  First name is required
                </span>
              )}
            </div>
            <div>
              <label className="text-sm" htmlFor="">
                Last Name<span className="text-red-500">*</span>
              </label>
              <input
                className="border px-3 py-2 w-full outline-none "
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-xs text-red-400">
                  Last name is required
                </span>
              )}
            </div>
          </div>
          {/* Row 2 */}
          <div>
            <label className="text-sm" htmlFor="">
              Street Address<span className="text-red-500">*</span>
            </label>
            <input
              className="border px-3 py-2 w-full outline-none "
              {...register("address", { required: true })}
            />
            {errors.lastName && (
              <span className="text-xs text-red-400">Address is required</span>
            )}
          </div>
          {/* Row 3 and 4 */}
          <div className="grid grid-cols-2 gap-5">
            <div>
              <label className="text-sm" htmlFor="">
                Contact Number<span className="text-red-500">*</span>
              </label>
              <input
                className="border px-3 py-2 w-full outline-none "
                {...register("contactNumber", { required: true })}
              />
              {errors.firstName && (
                <span className="text-xs text-red-400">
                  Contact number is required
                </span>
              )}
            </div>
            <div>
              <label className="text-sm" htmlFor="">
                Apt Number<span className="text-red-500">*</span>
              </label>
              <input
                className="border px-3 py-2 w-full outline-none "
                {...register("apartmentNumber", { required: true })}
              />
              {errors.firstName && (
                <span className="text-xs text-red-400">
                  Apartment Number is required
                </span>
              )}
            </div>
            <div>
              <label className="text-sm" htmlFor="">
                State<span className="text-red-500">*</span>
              </label>
              <input
                className="border px-3 py-2 w-full outline-none "
                {...register("state", { required: true })}
              />
              {errors.lastName && (
                <span className="text-xs text-red-400">State is required</span>
              )}
            </div>
            <div>
              <label className="text-sm" htmlFor="">
                Zip<span className="text-red-500">*</span>
              </label>
              <input
                className="border px-3 py-2 w-full outline-none "
                {...register("zip", { required: true })}
              />
              {errors.lastName && (
                <span className="text-xs text-red-400">
                  Zip code is required
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-5">
          <button
            className="px-6 py-2 rounded-full border-2 border-gray-300 hover:bg-gray-300 transition-all duration-300 text-gray-300 hover:text-black w-full "
            type="submit"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-full border-2 border-secondary hover:bg-secondary transition-all duration-300 text-secondary hover:text-primary w-full col-span-2"
            type="submit"
          >
            Save this Address
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingAddress;
