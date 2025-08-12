import { useState, useEffect } from "react";
import { FiStar, FiHeart, FiEye} from "react-icons/fi"
import { Link } from "react-router-dom";
import { useWishlist, useCart, useSearch } from "../ScrollContext";
export const Shop = () =>{
     const [products, setProducts] = useState([]);
     const [errorMessage, setErrorMessage] = useState('');
     const {handleWishlist} = useWishlist();
     const {handleCart, isInCart} = useCart();
     const { searchTerm } = useSearch();

     const getProducts = async () => {
             try{
                 const response = await fetch('products.json');
                 if(!response.ok){
                     throw new Error ('failed to load products');
                 }
                 const data = await response.json();
                 if(data.products){
                     setProducts(data.products);
                 }
             } catch(error){
                 console.error(`Error fetching products : ${error}`);
                 setErrorMessage('Unable to get products');
             } 
         }
     
         useEffect(()=>{
             getProducts();
         }, []);
     

    return (
        <>
        <section className="mt-15 p-2">
            <h1 className="text-center font-bold text-lg">All Products</h1>
            <p className="error">{errorMessage}</p>

            <div className="mt-5  ">
            <ul className="hide-scrollbar grid grid-rows-5 auto-cols-[minmax(160px,_1fr)] grid-flow-col gap-5  overflow-auto">
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
        </div>
        </section>
        </>
    )
}