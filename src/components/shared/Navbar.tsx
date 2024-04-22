"use client";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";

// import NavProfile from "./NavProfile";
import dynamic from "next/dynamic";

const Navbar = () => {
  const pathName = usePathname();
  const NavProfile = dynamic(() => import("./NavProfile"), {
    ssr: false,
  });

  const navOption = (
    <>
      <Link
        className={`${pathName === "/" ? "text-secondary" : null}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`${pathName === "/dresses" ? "text-secondary" : null}`}
        href="/dresses"
      >
        All Dresses
      </Link>
      <Link
        className={`${pathName === "/flash-sale" ? "text-secondary" : null}`}
        href="/flash-sale"
      >
        Flash Items
      </Link>
      <Link href="/about-us">About Us</Link>
    </>
  );
  return (
    <Container>
      <div className="navbar bg-transparent max-w-7xl absolute w-full z-50 py-10  flex justify-between">
        <div className="navbar-start w-[20%] min-w-52">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-md w-52"
            >
              {navOption}
            </div>
          </div>
          <Logo customClass="font-normal hidden md:block"></Logo>
        </div>
        {/* Desktop nav */}
        <div className="navbar-center hidden lg:flex gap-5 text-black ">
          {navOption}
        </div>

        <NavProfile></NavProfile>
      </div>
    </Container>
  );
};

export default Navbar;
