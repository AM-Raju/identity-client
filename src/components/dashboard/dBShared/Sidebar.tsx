"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { FaHome } from "react-icons/fa";
import { FaCubesStacked, FaLeftLong } from "react-icons/fa6";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="bg-slate-800 w-full p-2 lg:p-8 h-[calc(100vh-120px)] sticky top-[120px] left-0 overflow-auto">
      <div className="w-full h-full flex flex-col justify-between">
        <div className=" w-full h-full flex flex-col gap-3">
          <Link
            className={`${
              pathName === "/dashboard" ? "bg-secondary" : ""
            } w-full px-3 py-2   hover:bg-secondary transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate bg-gray-200 `}
            href="/dashboard"
          >
            <FaHome className={`shrink-0 size-6`}></FaHome>
            <span className="truncate hidden md:block">Dashboard Home</span>
          </Link>
          <Link
            className={`${
              pathName === "/dashboard/dresses" ? "bg-secondary" : ""
            } w-full px-3 py-2  hover:bg-secondary transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate bg-gray-200`}
            href="/dashboard/dresses"
          >
            <FaCubesStacked className={`shrink-0 size-6`} />
            <span className="truncate hidden md:block">All Products</span>
          </Link>
        </div>

        <div className="w-full flex">
          <Link
            className={`w-full px-3 py-2  hover:bg-secondary transition-all duration-300 flex gap-3 items-center justify-center lg:justify-start truncate bg-gray-200`}
            href="/"
          >
            <FaLeftLong className="shrink-0 size-6"></FaLeftLong>
            <span className="truncate hidden md:block">Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
