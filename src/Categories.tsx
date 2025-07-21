import type { product } from "./typeSet"
import { MdCameraAlt, MdComputer, MdWatch } from "react-icons/md";
import { FaHeadphones, FaGamepad, FaMobile,  FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GiTShirt } from "react-icons/gi";

export const Categories = ({products} : product)=>{
    return (
        <>
       <section className="categories mt-15">
            <p className="border-l-8 text-red-500 text-[11px]">categories</p>

            <div className="flex items-center justify-between gap-6 ">
            <h3 className="font-bold">Browse By Category</h3>
            <div className="flex gap-3.5">
        <FaArrowLeft className="rounded-xl bg-gray-200" />
            <FaArrowRight className="rounded-xl bg-gray-200" />

        </div>
             </div>
        </section>

        <div>
             <ul className="hide-scrollbar flex gap-4 overflow-auto">
            {products.slice(0,9).map((goods)=>(
                <li key={goods.id}> 
                <FaGamepad/>
                {goods.category}
                </li>
            ))}
            </ul>
        </div>
        </>
    )
}
