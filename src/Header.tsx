import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { FaApple, FaArrowRight } from "react-icons/fa6"
import { Products } from "./FlashSale"
import { Categories } from "./Categories"

export const Header = ()=> {
  const [products, setProducts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

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

        <Products products={products} /> 
             <Categories products={products}/>




        </main>
        </>
    )
}