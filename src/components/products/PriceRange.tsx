const PriceRange = () => {
  return (
    <div className=" border border-secondary px-8 py-10">
      <h1 className="border-l-4 pl-3 border-coal-black text-xl">Price range</h1>
      <div className="mt-6 space-y-4 ">
        <div className="flex items-center gap-5 ">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="00-50"
            id=""
          />
          <label htmlFor="">$00 - $50</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="51-100"
            id=""
          />
          <label htmlFor="">$51 - $100</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="101-150"
            id=""
          />
          <label htmlFor="">$101 - $150</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="151-200"
            id=""
          />
          <label htmlFor="">$151 - $200</label>
        </div>
      </div>
    </div>
  );
};

export default PriceRange;
