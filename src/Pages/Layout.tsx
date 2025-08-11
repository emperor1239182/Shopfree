import { FaMagnifyingGlass, FaHeart, FaCartShopping, FaBars, FaXmark, FaUser } from "react-icons/fa6";
import { Outlet, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Footer } from "../Footer";
import { useWishlist } from "../ScrollContext";

export const Layout = () => {
  const [navBar, setNavBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const {count} = useWishlist();
  const [isClicked, setIsClicked] = useState(false);

  const location = useLocation();
useEffect(() => {
  setIsClicked(false);
}, [location]);


  return (
    <div className="flex flex-col min-h-screen">
      <section className="w-full">
        <nav className="navBar border-b-2 border-gray-300">
          <Link to="/home" className="font-bold text-2xl sm:hidden">Exclusive</Link>

          <ul className="sm:hidden items-center flex justify-between gap-4">
            <li onClick={() => setNavBar(false)} className="relative">

              <Link to="/wishlist">
        <div className={`rounded-2xl p-1 cursor-pointer ${
        isClicked ? "bg-red-500 text-white" : "bg-white text-black"
      }`} onClick={() => setIsClicked(!isClicked)}>
              <FaHeart/>
              </div>
              </Link>

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}

            </li>
            <li onClick={() => setNavBar(false)}>
              <Link to="/cart">
              <div className="navIcons">
              <FaCartShopping />
              </div>
              </Link>
            </li>
            <div className="navIcons">
            <FaBars className="sm:hidden" onClick={() => setNavBar((prev) => !prev)} />
              </div>
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

              <li className="hidden sm:block relative">
                <Link to="/wishlist">
                 <div className={`rounded-2xl p-1 cursor-pointer ${
        isClicked ? "bg-red-500 text-white" : "bg-white text-black"
      }`} onClick={() => setIsClicked(!isClicked)}>
              <FaHeart />
              {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {count}
        </span>
      )}

              </div>
              </Link>
              </li>
              <li className="hidden sm:block">
                <Link to="/cart">
                <div className="navIcons">
                <FaCartShopping />
                </div>
                </Link>
                </li>

              {/* Account dropdown */}
              <div className="hidden sm:block relative">
                <div onClick={() => setShowDropdown((prev) => !prev)} className="navIcons">
                  <FaUser />
                </div>

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
