import { FiArrowLeft, FiArrowRight, FiHeart, FiEye, FiStar } from "react-icons/fi"
import { useScroll } from "./ScrollContext"

export const OurProducts = ({products})=>{
    const {scrollRefs, scrollLeft, scrollRight} = useScroll()
    return (
        <>
         <section className="categories mt-15">
                     <p className="border-l-8 text-red-500 text-[11px]">Our Products</p>
         
                     <div className="flex items-center justify-between gap-6 ">
                     <h3 className="font-bold">Explore Our Products</h3>
                     <div className="flex gap-3.5">
                 <FiArrowLeft className="rounded-xl bg-gray-200" onClick={() => scrollLeft('ourProducts')}/>
                     <FiArrowRight className="rounded-xl bg-gray-200" onClick={() => scrollRight('ourProducts')} />
                 </div>
                      </div>
                 </section>

             <div className="mt-5  ">
            <ul className="hide-scrollbar grid grid-rows-2 auto-cols-[minmax(160px,_1fr)] grid-flow-col gap-5  overflow-auto" ref={scrollRefs.ourProducts}>
            {products.map((goods)=>(
                <li key={goods.id}>

                    <div className="w-40">

                        <div className="relative w-40 bg-gray-100 p-5">
                    <img src={goods.image} className=" "/>
                    <div className="absolute top-0 right-2">
                    <div className="mt-3 rounded-2xl bg-white p-1"><FiHeart size={15}/></div>
                    <div className="mt-3 rounded-2xl bg-white p-1"><FiEye size={15}/></div>
                    </div>
                    <p className="addToCart">Add To Cart</p>
                    <p className="absolute left-1 top-1 text-[9px] px-2 text-white rounded bg-red-600">{goods.discount}</p>
                    </div>

                    <p className="text-[10px] font-bold">{goods.name}</p>
                    <p className="text-[10px] text-red-400">{goods.price} <span className="text-gray-600 ml-2 line-through font-bold">{goods.oldPrice} </span></p>
                    <div className="flex">
                    <FiStar color="gold" size={8}/>
                    <FiStar color="gold" size={8}/>
                    <FiStar color="gold" size={8}/>
                    </div>

                    </div>
                </li>
            ))}
            </ul>
            <p className="viewAll mt-5">View All Products</p>
        </div>

        </>
    )
}