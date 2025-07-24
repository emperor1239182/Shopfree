import type { product } from "./typeSet"
import { FiHeart, FiEye, FiStar } from "react-icons/fi"

export const BestSellingProducts = ({products} : product)=>{
    return (
        <>
        <section className="categories mt-15">
            <p className="border-l-8 text-red-500 text-[11px]">This Month</p>

            <div className="intro">
            <h3 className="font-bold">Best Selling Products</h3>
            <p className="bg-red-500 text-center text-white text-[10px] px-3 py-1">View All</p>
             </div>
        </section>

        <div className="mt-5  ">
            <ul className="hide-scrollbar productList">
            {products.slice(1,10).toReversed().map((goods)=>(
                <li key={goods.id}>

                    <div className="w-40">

                        <div className="relative w-40 bg-gray-100 p-5">
                    <img src={goods.image} className=" object-fit h-30"/>
                    <div className="absolute top-0 right-2">
                    <div className="mt-3 rounded-2xl bg-white p-1"><FiHeart size={15}/></div>
                    <div className="mt-3 rounded-2xl bg-white p-1"><FiEye size={15} /></div>
                    </div>
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
            </div>
        </>
    )
}