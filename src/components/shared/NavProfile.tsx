"use client";
import { authKey } from "@/constant/constant";
import { getUserInfo, isLoggedIn, removeUser } from "@/services/auth.service";
import { removeFromLocalStorage } from "@/utils/localStorage";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { SetStateAction, useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

const NavProfile = () => {
  const router = useRouter();
  const pathName = usePathname();
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  const handleLogout = () => {
    removeUser();
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <AiOutlineShoppingCart className="text-white size-7" />

            <p className="badge badge-sm indicator-item">8</p>
          </div>
        </div>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">8 Items</span>
            <span className="text-info">Subtotal: $999</span>
            <div className="card-actions">
              <button className="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="size-9 rounded-full border-2 border-secondary">
            {user ? (
              <Image
                className="scale-125 rounded-full"
                alt="Profile image"
                src="https://i.ibb.co/g7ScGKX/testimonial-img-1.png"
                width="200"
                height="200"
              />
            ) : (
              <div className="size-8 flex justify-center items-center">
                <FaRegUser className="text-white text-2xl" />
              </div>
            )}
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-md w-52"
        >
          {user ? (
            <>
              <li>
                <Link href="#">Profile</Link>
              </li>
              <li>
                <Link
                  className={`${
                    pathName === "/dashboard" ? "text-secondary" : null
                  }`}
                  href="/dashboard"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default NavProfile;
