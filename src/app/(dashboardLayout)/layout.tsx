"use client";
import Sidebar from "@/components/dashboard/dBShared/Sidebar";
import Logo from "@/components/shared/Logo";
import NavProfile from "@/components/shared/NavProfile";
import { isLoggedIn } from "@/services/auth.service";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  if (!isLoggedIn()) {
    return router.push("/login");
  }
  return (
    <div>
      <div className="bg-slate-800 pt-10 pb-8 sticky top-0 left-0 z-50 ">
        <div className="max-w-[90%] mx-auto flex items-center justify-between ">
          <Logo customClass="text-white"></Logo>
          <NavProfile></NavProfile>
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
