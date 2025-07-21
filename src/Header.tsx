import { useEffect, useState, useRef } from "react"
import { Link } from "react-router-dom"
import { FaApple, FaArrowRight, FaArrowLeft } from "react-icons/fa6"
import { Products } from "./Products"
import { Categories } from "./Categories"

export const Header = ()=> {
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 0, minutes: 0, seconds: 0 });
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);

    const interval = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

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

    const scrollRef = useRef<HTMLDivElement>(null);

const scrollLeft = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' }); // scroll left
  }
};

const scrollRight = () => {
  if (scrollRef.current) {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // scroll right
  }
};
 




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
                <img src="/public/images/Iphone.png" className="max-w-[140px] "/>
            </div>
        </header>



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
        <FaArrowLeft className="rounded-xl bg-gray-200" onClick={scrollLeft}/>
        <FaArrowRight className="rounded-xl bg-gray-200" onClick={scrollRight}/>
    </div>

    </div>
        <Products products={products} scrollRef={scrollRef}/> 
        </section>

        <section className="categories mt-15">
            <p className="border-l-8 text-red-500 text-[11px]">categories</p>

            <div className="flex items-center justify-between gap-6 ">
            <h3 className="font-bold">Browse By Category</h3>
            <div className="flex gap-3.5">
        <FaArrowLeft className="rounded-xl bg-gray-200" onClick={scrollLeft}/>
        <FaArrowRight className="rounded-xl bg-gray-200" onClick={scrollRight}/>
        </div>
             </div>

             <Categories products={products}/>
        </section>




        </main>
        </>
    )
}