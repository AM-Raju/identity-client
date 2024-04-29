import Image from "next/image";

const PaymentMethodCard = () => {
  return (
    <div className="border-2 rounded-lg p-8">
      <h3 className="mb-5 text-xl">Payment Method</h3>
      <div className=" gap-6 grid grid-cols-6">
        {/* Payment icons */}
        <label className="flex items-center cursor-pointer ">
          <input
            type="radio"
            className="hidden"
            name="paymentMethod"
            value="mastercard"
          />
          <div className="flex items-center">
            <Image
              src="https://i.ibb.co/G2j6cbp/american-express.png"
              alt="american express"
              width="64"
              height="64"
            ></Image>
          </div>
        </label>
        {/* Payment icons */}
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="hidden"
            name="paymentMethod"
            value="mastercard"
          />
          <div className="flex items-center">
            <Image
              src="https://i.ibb.co/58sBGqK/mastercard.png"
              alt="american express"
              width="64"
              height="64"
            ></Image>
          </div>
        </label>
        {/* Payment icons */}
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="hidden"
            name="paymentMethod"
            value="mastercard"
          />
          <div className="flex items-center">
            <Image
              src="https://i.ibb.co/8Y7Hb2r/paypal.png"
              alt="american express"
              width="64"
              height="64"
            ></Image>
          </div>
        </label>
        {/* Payment icons */}
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="hidden"
            name="paymentMethod"
            value="mastercard"
          />
          <div className="flex items-center">
            <Image
              src="https://i.ibb.co/t4Pkvtq/skrill.png"
              alt="american express"
              width="64"
              height="64"
            ></Image>
          </div>
        </label>
        {/* Payment icons */}
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="hidden"
            name="paymentMethod"
            value="mastercard"
          />
          <div className="flex items-center">
            <Image
              src="https://i.ibb.co/RH7V0qL/visa.png"
              alt="american express"
              width="64"
              height="64"
            ></Image>
          </div>
        </label>
        {/* Payment icons */}
        <label className="flex items-center cursor-pointer">
          <input
            type="radio"
            className="hidden"
            name="paymentMethod"
            value="mastercard"
          />
          <div className="flex items-center">
            <Image
              src="https://i.ibb.co/sV0FRrQ/western-union.png"
              alt="american express"
              width="64"
              height="64"
            ></Image>
          </div>
        </label>
      </div>
      <div>
        <label className="flex items-center cursor-pointer ">
          <input
            type="radio"
            className="hidden"
            name="paymentMethod"
            value="mastercard"
          />
          <div className="flex items-center justify-center w-full mt-8 border-2 border-secondary hover:bg-secondary text-secondary hover:text-primary py-3 font-semibold  transition-all duration-300 tracking-wider">
            <h3>Cash On Delivery</h3>
          </div>
        </label>
      </div>
    </div>
  );
};

export default PaymentMethodCard;
