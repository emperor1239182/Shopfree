import type { product } from "./typeSet"
import { FaMobile, FaStopwatch, FaCamera, FaComputer, FaShirt, } from "react-icons/fa6"

export const Categories = ({products} : product)=>{
    return (
        <>
        <div className="categories">
             <ul className="hide-scrollbar flex gap-4 overflow-auto">
            {products.slice(0,9).map((goods)=>(
                <li key={goods.id}> 
                <FaMobile/>
                {goods.category}
                </li>
            ))}
            </ul>
        </div>
        </>
    )
}
