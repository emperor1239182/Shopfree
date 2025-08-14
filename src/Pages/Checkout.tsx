import { useCart } from "../ScrollContext";
import { Link } from "react-router-dom";

export const Checkout = ()=> {
    const { cartWithIds, totalAmount, quantities, Order} = useCart();

    return(
        <>
        <section className="mt-15 p-3 max-w-[400px] m-auto">
            {cartWithIds.map((item, id: number)=>(
                <div key={id}>
                    <ul className="flex flex-col justify-center">
                        <li className="flex justify-between items-center text-[12px]">
                         <div className="flex gap-3 items-center">
                        <img src={item.image} className="w-10 h-10"/>
                        <p>{item.name}</p>
                        </div>
                        <p className="subTotal font-bold">
                {"$" +
                  (
                    parseFloat(
                      item.price?.toString().replace(/[^0-9.-]+/g, "")
                    ) * (quantities[item._uid] || 1)
                  ).toFixed(2)}
              </p>
              </li>
                    </ul>
                </div>
            ))}

            <div className="bill w-auto">
              <div className="totalValues">
                <p>Sub Total:</p>
                <p className="font-bold">${totalAmount.toFixed(2)}</p>
              </div>
              <div className="totalValues">
                <p>Shipping:</p>
                <p>free</p>
              </div>
              <div className="totalValues">
                <p>Total: </p>
                <p className="font-bold">${totalAmount.toFixed(2)}</p>
              </div>

              <div className="totalValues border-b-0">
                <span><input type="radio" /> Bank</span>
                <img src="/public/images/Card types.png" className="w-[90px]"/>
              </div>

              <span className="text-[11px]"><input type="radio" /> Cash On Delivery</span>
              
              <button className="bg-red-500 text-[9px] w-[120px] text-center rounded text-white p-2 mt-4 self-center">
               <Link to="/home" onClick={Order}> Place Order </Link>
              </button>
            
          </div>


        </section>
        </>
    )
}