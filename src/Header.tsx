import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaApple, FaArrowRight, FaCar, FaHeadphones, FaCheck } from "react-icons/fa6"
import { Products } from "./FlashSale"
import { Categories } from "./Categories"
import { BestSellingProducts } from "./BestSelling"
import { OurProducts } from "./OurProducts"
import { NewArrivals } from "./NewArrival"
import { Footer } from "./Footer"


export const Header = ()=> {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
   const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

   

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

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 6);
    
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
        
 
      const icons = [ <FaCar/>, <FaHeadphones/>, <FaCheck/> ]

      const guarantees = {
         
            Cars: {
            icon: icons[0],
            hint: "FREE AND FAST DELIVERY",
            goal: "Free delivery for all oders over $140"
            },

            Headphone: {
            icon: icons[1],
            hint: "24/7 CUSTOMER SERVICE",
            goal: "Friendly 24/7 customer support"
            },

            Check: {
            icon: icons[2],
            hint: "MONEY BACK GUARANTEE",
            goal: "We rerun money within 30 days"
            }
        
      }

      
    return (
        <>
        <main className="px-3">
            <p>{errorMessage}</p>
        <header>

            <div className="adds">
                <div className="addsText">
                   <p className="flex items-center gap-4 text-[12px]"> <FaApple size={50}/> iphone14 series </p>
                   <p>Up to 10% off Voucher</p>
                   <Link to="/about" className="text-[12px] flex items-center gap-2 underline">shop now <FaArrowRight/></Link>
                </div>
                <img src="/public/images/Iphone.png" className="w-[120px] sm:w-[240px] "/>
            </div>
        </header>

        <Products products={products} /> 
             <Categories products={products}/>
             <BestSellingProducts products={products}/>

             <div className="adds mt-10 flex-col sm:flex-row">
                <div className="addsText"> 
                    <p className="text-[10px] text-green-400 font-bold">Categories</p>
                   <p className="flex items-center gap-4 "> Enhance Your Music Experience </p>
                   <div className=" flex text-center text-[7px] font-semibold gap-1">
              <p className=" rounded-4xl bg-gray-200 p-3 text-black">  Days <br/> <span className="date">{timeLeft.days.toString().padStart(2, "0")} </span></p> 
               <p className= "rounded-4xl bg-gray-200 p-3 text-black">Hours <br/> <span className="date">{timeLeft.hours }   </span></p> 
                <p className="rounded-4xl bg-gray-200 p-3 text-black">Minutes <br/> <span className="date">{timeLeft.minutes} </span></p> 
                 <p className="rounded-4xl bg-gray-200 p-3 text-black">Seconds <br/> <span className="date">{timeLeft.seconds} </span></p>
            </div>
                   <Link to="/about" className="text-[12px] bg-green-400 text-center w-30 p-3 ">Buy now </Link>
                </div>
                <img src="/public/images/Jbl.png" className="max-w-[240px] self-start "/>
            </div>

            <OurProducts products={products}/>
            <NewArrivals/>

            <div className="descriptions">
                {Object.entries(guarantees).map(([key, value]) => (
                  <div key={key} className="desc">
                    <div>{value.icon}</div>
                    <div>{value.hint}</div>
                    <div>{value.goal}</div>
                  </div>
                ))}
            </div>

        </main>
        <Footer/>
        </>
    )
}