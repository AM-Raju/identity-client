import Sidebar from "@/components/dashboard/dBShared/Sidebar";
import Logo from "@/components/shared/Logo";
import { ReactNode } from "react";
import { FaRegCircleUser } from "react-icons/fa6";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className="bg-slate-800 pt-10 pb-8 sticky top-0 left-0 z-50 ">
        <div className="max-w-[90%] mx-auto flex items-center justify-between ">
          <Logo customClass="text-white"></Logo>
          <div className="flex items-center gap-5">
            <FaRegCircleUser className="text-4xl text-white" />
            <div className="text-white">
              <p>User name</p>
              <p>User role</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12">
        <div className="col-span-2 ">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-10">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
