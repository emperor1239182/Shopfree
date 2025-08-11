import { useWishlist, useCart } from "../ScrollContext";
import { FiTrash } from "react-icons/fi";
export const Wishlist = () => {
  const { wishlist, count } = useWishlist();
  const { handleWishlist} = useWishlist();
  const {handleCart} = useCart();
  return (
    <section className="mt-15 p-3">
      <div className="flex justify-between items-center">
        <p className="font-bold">Wishlist ({count})</p>
        <p className="border-1 border-gray-400 text-[12px] font-bold text-center p-2 ">Move All To Bag</p>
      </div>
        <div className="mt-10">
          {wishlist.length > 0?  
          <ul className="productList hide-scrollbar">
            {wishlist.map((item, i) => (
                <li key={i}>
                  <div className="w-40">
         <div className=" bg-gray-100 p-5 relative w-40">
    <img src={item.image} alt={item.name} className="object-contain h-30"/>
    <div className="absolute top-0 right-2">
    <div className="mt-3 rounded-2xl bg-white p-1">
       <FiTrash
       size={15}
       onClick={() => {
       handleWishlist({
       image: item.image,
       name: item.name,
       price: item.price,
     });
   }}
 />
      </div>
    </div>
    <p className="addToCart" 
     onClick={()=> {
      handleCart({image:item.image, price:item.price}); 
      handleWishlist({
       image: item.image,
       name: item.name,
       price: item.price,
     });
    }}
    >
      Add To Cart
      </p>
  </div>
  <p className="productsName">{item.name}</p>
    <p className="productsPrice">{item.price}</p>
    </div>
  </li>
      ))}
      </ul> : 
      <p className="text-2xl font-bold text-center ">Go Make A Wish!</p>
        }
            
      </div>
    
    </section>
  );
}