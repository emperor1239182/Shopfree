import { Link } from "react-router-dom";
import type { FC } from "react";

export const NewArrivals: FC = () => {
  return (
    <>
      <section className="mt-15">
        <p className="tag">Featured</p>
        <h3 className="font-bold">New Arrival</h3>

        <div className="newArrivals">
          <div className="arrivalProducts row-span-2">
            <img src="/public/Ps5 set.png" alt="PlayStation 5" />
            <div className="addsDetails">
              <h4 className="font-bold">PlayStation 5</h4>
              <p>
                Black and white version of the PS5 coming out on sale
              </p>
              <Link to="/shop" className="font-extrabold">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="flex justify-between bg-black text-white col-span-2 px-2 relative">
            <div className="w-[60%] addsDetails relative mt-20">
              <p className="font-bold sm:text-xl">Women's Collections</p>
              <p className="text-[8px] sm:text-[12px]">
                Featured womens collection that gives you another vibe.
              </p>
              <Link
                to="/shop"
                className="text-[8px] sm:text-[12px] font-bold"
              >
                Shop Now
              </Link>
            </div>
            <img
              src="/womanWearingHat.png"
              alt="Woman Wearing Hat"
              className="max-w-[100px] sm:max-w-[300px] object-cover"
            />
          </div>

          <div className="arrivalProducts">
            <img src="/Speakers.png" alt="Speakers" />
            <div className="addsDetails">
              <h4 className="font-bold">Speakers</h4>
              <p>Amazon wireless speakers</p>
              <Link to="/shop" className="font-extrabold">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="arrivalProducts">
            <img src="/Perfume - Copy.png" alt="Perfume" />
            <div className="addsDetails">
              <h4 className="font-bold">Perfume</h4>
              <p>GUCCI INTENSE OUD EDP</p>
              <Link to="/shop" className="font-extrabold">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
