import { FaStar, FaHeart, FaEye } from "react-icons/fa6"
import type { product } from "./typeSet"

export const Products = ({products, scrollRef}: product)=>{

    



    return (
        <>
        <div className="mt-5  ">
            <ul className="hide-scrollbar flex gap-4 overflow-auto" ref={scrollRef}>
            {products.slice(0,9).map((goods)=>(
                <li key={goods.id}>

                    <div className="w-40">

                        <div className="relative w-40 bg-gray-100 p-5">
                    <img src={goods.image} className=" object-cover"/>
                    <div className="absolute top-0 right-2">
                    <div className="mt-3 rounded-2xl bg-white p-1"><FaHeart size={15}/></div>
                    <div className="mt-3 rounded-2xl bg-white p-1"><FaEye size={15} /></div>
                    </div>
                    <p className="absolute left-1 top-1 text-[9px] px-2 text-white rounded bg-red-600">{goods.discount}</p>
                    </div>

                    <p className="text-[10px] font-bold">{goods.name}</p>
                    <p className="text-[10px] text-red-400">{goods.price} <span className="text-gray-300 ml-2">{goods.oldPrice} </span></p>
                    <div className="flex">
                    <FaStar color="gold" size={8}/>
                    <FaStar color="gold" size={8}/>
                    <FaStar color="gold" size={8}/>
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