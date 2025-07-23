import type { product } from "./typeSet"
import { FiCamera, FiMonitor, FiWatch, FiHeadphones, FiSmartphone, FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GiTShirt, GiSofa } from "react-icons/gi";
import { useScroll } from './ScrollContext';
import { LuGamepad } from "react-icons/lu";


export const Categories = ({products} : product)=>{
     const { scrollRefs, scrollLeft, scrollRight } = useScroll();
    
    const categoryIcons = {
  Phones: FiSmartphone,
  Computers: FiMonitor,
  Clothings: GiTShirt,
  Gaming: LuGamepad,
  Headphones: FiHeadphones,
  Cameras: FiCamera,
  Watches: FiWatch,
  Furnitures: GiSofa
};


    return (
        <>
       <section className="categories mt-15">
            <p className="border-l-8 text-red-500 text-[11px]">categories</p>

            <div className="flex items-center justify-between gap-6 ">
            <h3 className="font-bold">Browse By Category</h3>
            <div className="flex gap-3.5">
        <FiArrowLeft className="rounded-xl bg-gray-200 sm:hidden" onClick={() => scrollLeft('categories')}/>
            <FiArrowRight className="rounded-xl bg-gray-200 sm:hidden" onClick={() => scrollRight('categories')} />
        </div>
             </div>
        </section>

        <div className="mt-5">
             <ul className="productList hide-scrollbar"  ref={scrollRefs.categories}>
            {products.slice(0,6).map((goods)=>{
                const Icon = categoryIcons[goods.category];
                return (
                <li key={goods.id} className="border-2 border-gray-200 text-center p-3"> 
                     {Icon && <Icon className="text-xl m-auto" />}
                   <p className="text-[10px]">{goods.category}</p>
                </li>
                )
            })}
            </ul>
        </div>

        </>
    )
}
