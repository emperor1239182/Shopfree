import { FiArrowLeft, FiArrowRight, FiHeart, FiEye, FiStar } from "react-icons/fi"
import { useCart, useScroll, useWishlist, useSearch} from "./ScrollContext"
import { Link } from "react-router-dom";
import type { allProducts } from "./typeSet";

export const OurProducts = ({products} : allProducts)=>{
    const {scrollRefs, scrollLeft, scrollRight} = useScroll();
    const { handleWishlist} = useWishlist();
    const {handleCart, isInCart} = useCart();
    const { searchTerm } = useSearch();


    return (
        <>
         <section className="categories mt-15">
                     <p className="border-l-8 text-red-500 text-[11px]">Our Products</p>
         
                     <div className="intro">
                     <h3 className="font-bold">Explore Our Products</h3>
                     <div className="flex gap-3.5">
                 <FiArrowLeft className="rounded-xl bg-gray-200" onClick={() => scrollLeft('ourProducts')}/>
                     <FiArrowRight className="rounded-xl bg-gray-200" onClick={() => scrollRight('ourProducts')} />
                 </div>
                      </div>
                 </section>

             <div className="mt-5  ">
            <ul className="hide-scrollbar grid grid-rows-2 auto-cols-[minmax(160px,_1fr)] grid-flow-col gap-5  overflow-auto" ref={scrollRefs.ourProducts}>
            {products.filter(goods =>
            goods.name.toLowerCase().includes(searchTerm.toLowerCase())).map((goods)=>(
                <li key={goods.id}>

                    <div className="w-40">

                        <div className="relative w-40 bg-gray-100 p-5">
                    <img src={goods.image} className="object-contain h-30"/>
                    <div className="absolute top-0 right-2">
                    <div className="mt-3 rounded-2xl bg-white p-1">
                        <FiHeart size={15} 
                         onClick={() =>{
                            handleWishlist({image:goods.image, name:goods.name, price:goods.price});
                         }} className="wis"/>
                         </div>
                    <div className="mt-3 rounded-2xl bg-white p-1"><Link to="/wishlist"><FiEye size={15}/></Link></div>
                    </div>
                    <p className="addToCart" onClick={()=> handleCart({image:goods.image, name:goods.name, price:goods.price})}>
                        {isInCart(goods) ? "Remove Item" : "Add to Cart"}
                    </p>
                    
                    </div>

                    <p className="productsName">{goods.name}</p>
                    <p className="productsPrice">{goods.price} <span className="text-gray-600 ml-2 line-through font-bold">  </span></p>
                    <div className="flex">
                    <FiStar color="gold" size={8}/>
                    <FiStar color="gold" size={8}/>
                    <FiStar color="gold" size={8}/>
                    </div>

                    </div>
                </li>
            ))}
            </ul>
            <p className="viewAll mt-5"><Link to="/shop">View All Products</Link></p>
        </div>
        </>
    )
}