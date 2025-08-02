import { FaMagnifyingGlass, FaHeart, FaCartShopping, FaBars, FaXmark, FaUser } from "react-icons/fa6"
import { Outlet, Link } from "react-router-dom"
import { useState } from "react"
export const Layout = ()=> {
    const [navBar, setNavBar] = useState(false);

    return(
        <>
        <section className="w-full">
        <nav className="navBar border-b-2 border-gray-300">
            <Link to="/home"  className="font-bold text-2xl sm:hidden">Exclusive</Link>
            <ul className="sm:hidden flex justify-between gap-4">
            <li onClick={()=> setNavBar(false)}>
                    <Link to="/wishlist" > <FaHeart/> </Link>
                </li>
                <li onClick={()=> setNavBar(false)}>
                    <Link to="/cart"> <FaCartShopping/> </Link>
                </li>
                 <FaBars className="sm:hidden" onClick={()=> setNavBar((prev)=> !prev)}/>
                </ul>

            <ul className={navBar? "mobileNavList" : "navList"}>
                <li>
                    <Link to="/home"  className="font-bold text-2xl hidden sm:block">Exclusive</Link>
                </li>
                <FaXmark className="sm:hidden absolute right-0" onClick={()=> setNavBar(false)}/>
                <li className="mt-4 sm:mt-0" onClick={()=> setNavBar(false)}>
                    <Link to="/">Home</Link>
                </li>
                <li className="mt-4 sm:mt-0" onClick={()=> setNavBar(false)}>
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="mt-4 sm:mt-0" onClick={()=> setNavBar(false)}>
                    <Link to="/about">About</Link>
                </li>
                <li className="mt-4 sm:mt-0" onClick={()=> setNavBar(false)}>
                    <Link to="/signup">Sign Up</Link>
                </li>

                <div className="flex justify-between gap-4 items-center">
                <div className="search flex bg-gray-100 w-37 px-2 items-center mt-4 sm:mt-auto">
                    <input type="text" placeholder="what are you looking for?" className="placeholder:text-[8px] w-30"/>
                    <FaMagnifyingGlass/> 
                </div>

                <li className="hidden sm:block">
                    <Link to="/wishlist" > <FaHeart/> </Link>
                </li>
                <li className="hidden sm:block">
                    <Link to="/cart"> <FaCartShopping/> </Link>
                </li>
                <li className="hidden sm:block">
                    <Link to="/cart"> <FaUser/> </Link>
                </li>
                 <li className="hidden">
                    <Link to="/nopage">No page</Link>
                </li>
              </div> 

              </ul>
            </nav>
            </section>
          <Outlet/>      
        </>
    )
}