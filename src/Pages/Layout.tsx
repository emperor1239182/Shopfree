import { FaMagnifyingGlass, FaHeart, FaCartShopping, FaBars, FaXmark, FaUser } from "react-icons/fa6";
import { Outlet, Link } from "react-router-dom";
import { useState } from "react";
import { Footer } from "../Footer";
import { useWishlist } from "../ScrollContext";

export const Layout = () => {
  const [navBar, setNavBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const {count} = useWishlist();

  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full">
        <nav className="navBar border-b-2 border-gray-300">
          <Link to="/home" className="font-bold text-2xl sm:hidden">Exclusive</Link>

          <ul className="sm:hidden flex justify-between gap-4">
            <li onClick={() => setNavBar(false)} className="relative">
              <Link to="/wishlist">
              <FaHeart />
              </Link>
              <p className=" text-red-500 absolute top-0">{count}</p>
            </li>
            <li onClick={() => setNavBar(false)}>
              <Link to="/cart"><FaCartShopping /></Link>
            </li>
            <FaBars className="sm:hidden" onClick={() => setNavBar((prev) => !prev)} />
          </ul>

          <ul className={navBar ? "mobileNavList" : "navList"}>
            <li>
              <Link to="/home" className="font-bold text-2xl hidden sm:block">Exclusive</Link>
            </li>
            <FaXmark className="sm:hidden absolute right-4" onClick={() => setNavBar(false)} size={26} />
            <li className="mt-4 sm:mt-0" onClick={() => setNavBar(false)}><Link to="/">Home</Link></li>
            <li className="mt-4 sm:mt-0" onClick={() => setNavBar(false)}><Link to="/contact">Contact</Link></li>
            <li className="mt-4 sm:mt-0" onClick={() => setNavBar(false)}><Link to="/about">About</Link></li>
            <li className="mt-4 sm:mt-0" onClick={() => setNavBar(false)}><Link to="/signup">Sign Up</Link></li>

            {/* Mobile-only account links */}
            <li className="mt-4 sm:hidden" onClick={() => setNavBar(false)}><Link to="/account">Manage My Account</Link></li>
            <li className="mt-4 sm:hidden" onClick={() => setNavBar(false)}><Link to="/signup">My Order</Link></li>
            <li className="mt-4 sm:hidden" onClick={() => setNavBar(false)}><Link to="/signup">My Cancellations</Link></li>
            <li className="mt-4 sm:hidden" onClick={() => setNavBar(false)}><Link to="/signup">Log Out</Link></li>

            <div className="flex justify-between gap-4 items-center">
              <div className="search flex bg-gray-100 w-37 px-2 items-center mt-4 sm:mt-auto">
                <input type="text" placeholder="what are you looking for?" className="placeholder:text-[8px] w-30 text-black" />
                <FaMagnifyingGlass />
              </div>

              <li className="hidden sm:block"><Link to="/wishlist"><FaHeart /></Link></li>
              <li className="hidden sm:block"><Link to="/cart"><FaCartShopping /></Link></li>

              {/* Account dropdown */}
              <div className="hidden sm:block relative">
                <span onClick={() => setShowDropdown((prev) => !prev)} className="cursor-pointer">
                  <FaUser />
                </span>

                {showDropdown && (
                  <div className="manageAccount">
                    <li className="mt-4" onClick={() => setShowDropdown(false)}><Link to="/account">Manage My Account</Link></li>
                    <li className="mt-4" onClick={() => setShowDropdown(false)}><Link to="/myorder">My Order</Link></li>
                    <li className="mt-4" onClick={() => setShowDropdown(false)}><Link to="/myorder">My Cancellations</Link></li>
                    <li className="mt-4" onClick={() => setShowDropdown(false)}><Link to="/signup">Log Out</Link></li>
                  </div>
                )}
              </div>

              <li className="hidden"><Link to="/nopage">No page</Link></li>
            </div>
          </ul>
        </nav>
      </section>

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer/>
    </div>
  );
};
