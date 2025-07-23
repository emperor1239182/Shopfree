import { useEffect, useState } from "react"
import { FaStar, FaHeart, FaEye, FaArrowRight, FaArrowLeft } from "react-icons/fa6"
import type { product } from "./typeSet"
import { useScroll } from './ScrollContext';

export const Products = ({products}: product)=>{
     const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });
     const { scrollRefs, scrollLeft, scrollRight } = useScroll();


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
                    <p className="border-l-8 text-red-500 text-[11px]">Today's</p>
        
                    <div className="flex items-center justify-between gap-6 ">
        
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
                <FaArrowLeft className="rounded-xl bg-gray-200" onClick={() => scrollLeft('flashSales')}/>
                <FaArrowRight className="rounded-xl bg-gray-200" onClick={() => scrollRight('flashSales')}/>
            </div>
        
            </div>
                </section>

        <div className="mt-5  ">
            <ul className="hide-scrollbar productList" ref={scrollRefs.flashSales}>
            {products.slice(1,9).map((goods)=>(
                <li key={goods.id}>

                    <div className="w-40">

                        <div className="relative w-40 bg-gray-100 p-5">
                    <img src={goods.image} className=" object-cover"/>
                    <div className="absolute top-0 right-2">
                    <div className="mt-3 rounded-2xl bg-white p-1"><FaHeart size={15}/></div>
                    <div className="mt-3 rounded-2xl bg-white p-1"><FaEye size={15} /></div>
                    </div>
                    <p className="addToCart">Add To Cart</p>
                    <p className="absolute left-1 top-1 text-[9px] px-2 text-white rounded bg-red-600">{goods.discount}</p>
                    </div>

                    <p className="text-[10px] font-bold">{goods.name}</p>
                    <p className="text-[10px] text-red-400">{goods.price} <span className="text-gray-600 ml-2 line-through font-bold">{goods.oldPrice} </span></p>
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