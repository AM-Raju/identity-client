const CategoryDropDown = () => {
  return (
    <div className=" border border-secondary px-8 py-10">
      <h1 className="border-l-4 pl-3 border-coal-black text-xl">Category</h1>
      <div className="mt-6 space-y-4">
        <select className="w-full outline-none  py-2 space-y-6" name="" id="">
          <option value="">Select Category</option>
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </div>
    </div>
  );
};

export default CategoryDropDown;
