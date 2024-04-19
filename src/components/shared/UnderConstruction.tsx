import React from "react";
import { IoConstructOutline } from "react-icons/io5";

const UnderConstruction = ({ page }: { page: string }) => {
  return (
    <div className="flex items-center justify-center flex-col h-72">
      <IoConstructOutline className="text-5xl" />
      <h1 className="text-2xl text-white">{page} Page</h1>
      <h1>is Under Construction</h1>
    </div>
  );
};

export default UnderConstruction;
