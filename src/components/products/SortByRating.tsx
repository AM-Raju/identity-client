const SortByRating = () => {
  return (
    <div className=" border border-secondary px-8 py-10">
      <h1 className="border-l-4 pl-3 border-coal-black text-xl">Ratings</h1>
      <div className="mt-6 space-y-4">
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="1star"
            id=""
          />
          <label htmlFor="">1 Star</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="2star"
            id=""
          />
          <label htmlFor="">2 Star</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="3star"
            id=""
          />
          <label htmlFor="">3 Star</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="4star"
            id=""
          />
          <label htmlFor="">4 Star</label>
        </div>
        <div className="flex items-center gap-5">
          <input
            className=" focus:ring-0 focus:ring-offset-0  size-5"
            type="checkbox"
            name="5star"
            id=""
          />
          <label htmlFor="">5 Star</label>
        </div>
      </div>
    </div>
  );
};

export default SortByRating;
