import { useCart } from "../ScrollContext"


export const Cart = ()=> {
    const {cart} = useCart();
    return(
        <>
        <section className="mt-20 p-3 flex flex-col max-w-[730px] m-auto">


           {cart.length > 0? 
           <ul>
            <div className="invoice">
                <p className="invoiceHeader">Product</p>
                <p className="invoiceHeader">Price</p>
                <p className="invoiceHeader">Quantity</p>
                <p className="invoiceHeader">Subtotal</p>
            </div>
            {cart.map((items, id)=>(
                <div key={id} className="invoice">
                <img src={items.image} className="w-10 h-10"/>
                <p> {items.price}</p>
                <input type="number" className="w-10 border-1 "/>
                <p className="subTotal">amount</p>
                </div>
            ))}
            <div className="flex justify-between items-center flex-col flex-col-reverse sm:flex-row">
            <p className="text-[11px] border-1 p-2 w-[120px] text-center self-start mt-8">Return To Shop</p>

            <div className="bill w-[250px] border-2 border-gray-300 p-2 mt-8 flex flex-col gap-2 justify-center">
                <p className="font-bold">Cart Total</p>
                <div className="totalValues">
                <p>SubTotal:</p>
                <p>$900</p>
                </div>
                <div className="totalValues">
                <p>Shipping:</p>
                <p>free</p>
                </div>
                <div className="totalValues">
                <p>Total:</p>
                <p>free</p>
                </div>

                <button className="bg-red-500 text-[9px] w-[120px] text-center rounded text-white p-2 mt-4 self-center">Proceed To Checkout</button>
            </div>

            </div>


           </ul> : 
           <div className="flex justify-center flex-col items-center">
            <img src="/public/images/emptybox.jpeg" className="max-w-[300px] h-70 object-contain"/>
             <p className="text-2xl font-bold text-center ">Your Cart Is Empty!</p>
            </div>
           }
        </section>
        </>
    )
}