import { FaPhone, FaMessage } from "react-icons/fa6"
import { Footer } from "../Footer"

export const Contact = ()=> {
    return(
        <>
        <section className="contact">

            <div className="call">
                <p className="flex gap-2 items-center">
                    <p className="text-white bg-red-500 rounded-4xl p-1" ><FaPhone size={16} /></p>
                    <span>Call To Us</span>
                </p>
                <p>We are available 24/7, 7 days a week</p>
                <p>phone: +155 7534 432</p>
                <hr/>
                <p className="flex gap-2 items-center">
                    <p className="text-white bg-red-500 rounded-4xl p-1"><FaMessage  size={16}/></p>
                    <span>Write To Us</span>
                </p>   
                <p>Fill out our form and we will contat you within 24 hours.</p>
                <p>Email: support@exclusive.com</p>
            </div>

            <div className="messages">

                <div className="userData">
                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Your Email"/>
                    <input type="tel" placeholder="Your Phone"/>
                </div>
                <textarea rows={6} cols={70}>Your Message</textarea>
                <button className="send">Send Message</button>
            </div>

        </section>

        <Footer/>
        </>
    )
}