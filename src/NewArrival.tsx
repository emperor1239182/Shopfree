import { Link } from "react-router-dom"
export const NewArrivals = ()=>{
    return(
        <>
        <section className=" mt-15">
                    <p className="border-l-8 text-red-500 text-[11px]">Featured</p>
                    <h3 className="font-bold">New Arrival</h3>

                    <div className="newArrivals">

                    <div className="arrivalProducts">
                        <img src="/public/images/Ps5 set.png"/>
                        <div className="addsDetails">
                            <h4 className="font-bold">PlayStation 5</h4>
                            <p>Black and white version of the PS5 coming out on sale</p>
                            <Link to="/contact">Shop Now</Link>
                        </div>
                    </div>

                    <div className="flex bg-black text-white">
                        <div>
                            <p>Women's Collections</p>
                            <p>Featured womens collection that gives you another vibe.</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                        <img src="/public/images/womanWearingHat.png" className="max-w-[200px]"/>
                    </div>

                    <div className="arrivalProducts">
                        <img src="/public/images/Speakers.png"/>
                        <div className="addsDetails">
                            <h4 className="font-bold">Speakers</h4>
                            <p>Amazon wireless speakers</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                    </div>

                    <div className="arrivalProducts">
                        <img src="/public/images/Perfume - Copy.png"/>
                        <div className="addsDetails">
                            <h4 className="font-bold">Perfume</h4>
                            <p>GUCCI INTENSE OUD EDP</p>
                            <Link to="/">Shop Now</Link>
                        </div>
                    </div>

                    </div>


                </section>
        </>
    )
}