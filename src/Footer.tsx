import { Link } from "react-router-dom"
import { FaTelegram } from "react-icons/fa6"
export const Footer = ()=>{
    return (
        <>
        <section className="footer">
             
             <div className="footerContent">
                <Link to="/home" className="font-bold text-[13px]">Exclusive</Link>
                <p>Subscribe</p>
                <p>Get 10% off your first order</p>
                <div className="flex justify-between items-center border-1 ">
                <input type="email" placeholder="Enter your email" className="w-[90%] placeholder:text-[9px]"/>
                <FaTelegram size={24}/>
                </div>
             </div>

             <div className="footerContent">
                <h1 className="font-bold text-[13px]">Support</h1>
                <p>111, Bijay Sarani, Dahka, DH 1515, USA</p>
                <p>exclusive@gmail.com</p>
                <p>+154-777-2944</p>
             </div>

             <div className="footerContent">
                <h1 className="font-bold text-[13px]">Account</h1>
                <p><Link to="/signup">Login / Register</Link></p>
                <p><Link to="/cart">Cart</Link></p>
                <p><Link to="/Wishlist">Wishlist</Link></p>
                <p><Link to="/shop">Shop</Link></p>
             </div>

             <div className="footerContent">
                <h1 className="font-bold text-[13px]">Quick Link</h1>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p><Link to="/contact">Contact</Link></p>
             </div>

             <div className="footerContent">
                <h1 className="font-bold text-[18px]">Download App</h1>
                <p>Save $3 with App New Users Only</p>
                <div className="h-18 flex gap-2">
                <img src="/public/images/Qr Code.png" className="max-w-[60px]"/>
                <div>
                <img src="/public/images/playStore.png" className="max-w-[120px]"/>
                <img src="/public/images/download-appstore.png" className="max-w-[120px]"/>
                </div>
                </div>
             </div>

        </section>
        </>
    )
}