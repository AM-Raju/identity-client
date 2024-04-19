import Link from "next/link";
import React from "react";

import { TiWarning } from "react-icons/ti";

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <TiWarning className="text-primary size-52 mx-auto" />
        <h1 className="text-center text-4xl font-semibold text-secondary">
          Page Not Found!
        </h1>
        <div className="w-52 mx-auto  flex justify-center">
          <Link href="/">
            <button className="bg-secondary rounded-lg px-5 py-2  mt-3">
              Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
