import { useEffect, useState } from "react"
import { FiStar, FiHeart, FiEye, FiArrowRight, FiArrowLeft } from "react-icons/fi"
import type { product } from "./typeSet"
import { useCart, useScroll, useSearch, useWishlist } from './ScrollContext';
import { Link } from "react-router-dom";

export const FlashSale = ({products}: product)=>{
     const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });
     const { scrollRefs, scrollLeft, scrollRight } = useScroll();
     const {handleWishlist} = useWishlist();
     const {handleCart, isInCart} = useCart();
     const { searchTerm } = useSearch();

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();

      if (timeDifference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    



    return (
        <>
                <section className="today mt-15">
                    <p className="tag">Today's</p>
        
                    <div className="intro">
        
                        <div className="flex gap-3 sm:gap-10 items-center">
                    <h3 className="font-bold">Flash Sales</h3>
                    <div className=" flex text-center text-[7px] font-semibold gap-1">
              <p >  Days <br/> <span className="date">{timeLeft.days.toString().padStart(2, "0")}  :</span></p> 
               <p>Hours <br/> <span className="date">{timeLeft.hours } :  </span></p> 
                <p>Minutes <br/> <span className="date">{timeLeft.minutes}  :</span></p> 
                 <p>Seconds <br/> <span className="date">{timeLeft.seconds} </span></p>
            </div>
            </div>
        
            <div className="flex gap-3.5">
                <FiArrowLeft className="rounded-xl bg-gray-200" onClick={() => scrollLeft('flashSales')}/>
                <FiArrowRight className="rounded-xl bg-gray-200" onClick={() => scrollRight('flashSales')}/>
            </div>
        
            </div>
                </section>

        <div className="mt-5  ">
            <ul className="hide-scrollbar productList" ref={scrollRefs.flashSales}>
            {products.slice(1,10).filter(goods =>
            goods.name.toLowerCase().includes(searchTerm.toLowerCase())).map((goods)=>(
                <li key={goods.id}>

                    <div className="w-40">

                        <div className="productDisplay">
                    <img src={goods.image}/>
                    <div className="iconContainer">
                    <div className="productIcons">
                        <FiHeart size={15} 
                         onClick={() =>{
                            handleWishlist({image:goods.image, name:goods.name, price:goods.price});
                         }}/>
                        </div>
                    <div className="productIcons"><Link to="/wishlist"><FiEye size={15}/></Link></div>
                    </div>
                    <p className="addToCart"  onClick={()=> handleCart({image:goods.image, name:goods.name, price:goods.price})}>
                        {isInCart(goods) ? "Remove Item" : "Add to Cart"}
                    </p>
                    <p className="absolute left-1 top-1 text-[9px] px-2 text-white rounded bg-red-600">{goods.discount}</p>
                    </div>

                    <p className="productsName">{goods.name}</p>
                    <p className="productsPrice">{goods.price} <span className="text-gray-600 ml-2 line-through font-bold">{goods.oldPrice} </span></p>
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