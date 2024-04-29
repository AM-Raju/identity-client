"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { clearUser } from "@/redux/slices/userSlice";
import { removeUser } from "@/services/auth.service";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";

const NavProfile = () => {
  const cart = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const router = useRouter();
  const pathName = usePathname();

  const handleLogout = () => {
    removeUser();
    dispatch(clearUser());
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <AiOutlineShoppingCart className="text-secondary size-7" />

            <div className="bg-white flex items-center justify-center h-5 min-w-5  rounded-full border border-secondary relative -left-2 -top-2 p-1">
              <p className="px-0.5 text-xs">{cart?.cartTotalQuantity}</p>
            </div>
          </div>
        </div>
        <div
          tabIndex={0}
          className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
        >
          <div className="card-body">
            <span className="font-bold text-lg">
              {cart?.cartTotalQuantity} Items
            </span>
            <span className="text-info">
              Subtotal: ${cart?.cartTotalAmount}
            </span>
            <Link href="/checkout">
              <div className="w-full  flex justify-center">
                <button
                  className={`py-3 w-full rounded-lg border   transition-all duration-300 ${
                    cart.cartItems.length < 1
                      ? "bg-gray-300"
                      : "bg-secondary hover:bg-amber-500 border-secondary"
                  }`}
                  disabled={cart.cartItems.length < 1 ? true : false}
                >
                  View cart
                </button>
              </div>
            </Link>
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
            {user?.image ? (
              <Image
                className="scale-125 rounded-full"
                alt="Profile image"
                src={user?.image}
                width="200"
                height="200"
              />
            ) : (
              <div className="size-8 flex justify-center items-center">
                <FaRegUser className="text-secondary text-2xl p-0.5" />
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
