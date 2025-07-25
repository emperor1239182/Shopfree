import { Link } from "react-router-dom"
export const NewArrivals = ()=>{
    return(
        <>
        <section className=" mt-15">
                    <p className="tag">Featured</p>
                    <h3 className="font-bold">New Arrival</h3>

                    <div className="newArrivals">

                    <div className="arrivalProducts row-span-2">
                        <img src="/public/images/Ps5 set.png"/>
                        <div className="addsDetails">
                            <h4 className="font-bold">PlayStation 5</h4>
                            <p>Black and white version of the PS5 coming out on sale</p>
                            <Link to="/contact">Shop Now</Link>
                        </div>
                    </div>

                    <div className="flex justify-between bg-black text-white col-span-2 px-2 relative">
                        <div className=" w-[60%] addsDetails relative mt-20">
                            <p className="font-bold sm:text-xl">Women's Collections</p>
                            <p className="text-[8px] sm:text-[12px]">Featured womens collection that gives you another vibe.</p>
                            <Link to="/" className="text-[8px] sm:text-[12px] font-bold">Shop Now</Link>
                        </div>
                        <img src="/public/images/womanWearingHat.png" className="max-w-[100px] sm:max-w-[300px] object-cover"/>
                    </div>

                    <div className="arrivalProducts">
                        <img src="/public/images/Speakers.png"/>
                        <div className="addsDetails">
                            <h4 className="font-bold">Speakers</h4>
                            <p>Amazon wireless speakers</p>
                            <Link to="/" className="font-bold">Shop Now</Link>
                        </div>
                    </div>

                    <div className="arrivalProducts">
                        <img src="/public/images/Perfume - Copy.png"/>
                        <div className="addsDetails">
                            <h4 className="font-bold">Perfume</h4>
                            <p>GUCCI INTENSE OUD EDP</p>
                            <Link to="/" className="font-bold">Shop Now</Link>
                        </div>
                    </div>

                    </div>


                </section>
        </>
    )
}