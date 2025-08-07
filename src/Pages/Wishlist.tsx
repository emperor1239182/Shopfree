import { useWishlist } from "../ScrollContext";
import { FiTrash } from "react-icons/fi";
export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <section className="mt-30">
        <div>
            <ul>
            {wishlist.map((item, i) => (
                <li key={i}>
                  <div className="w-40">
         <div className=" bg-gray-100 p-5 relative w-40">
    <img src={item.image} alt={item.name} className="object-contain h-30"/>
    <div className="absolute top-0 right-2">
    <div className="mt-3 rounded-2xl bg-white p-1"><FiTrash size={15} onClick={() => handleWishlist({image:goods.image, name:goods.name, price:goods.price})}/></div>
    </div>
    <p className="addToCart">Add To Cart</p>
  </div>
  <p>{item.name}</p>
    <p>{item.price}</p>
    </div>
  </li>
      ))}
      </ul>
      </div>
    
    </section>
  );
}