import { useCart } from "../ScrollContext";
import { Link } from "react-router-dom";
import { Bill } from "../Bill";
import { ScrollSection } from "./Framer";
export const Cart = () => {
  const { cartWithIds, handleQuantityChange, totalAmount,quantities, setQuantities} = useCart();


  return (
    <section className="mt-20 p-3 flex flex-col max-w-[730px] m-auto">
      {cartWithIds.length > 0 ? (
        <ul>
          <div className="invoice">
            <p className="invoiceHeader">Product</p>
            <p className="invoiceHeader">Price</p>
            <p className="invoiceHeader">Quantity</p>
            <p className="invoiceHeader">Subtotal</p>
          </div>

          {cartWithIds.map((item, id) => (
            <ScrollSection delay={0.1} key={id}>
            <div key={item._uid} className="invoice">
              <img src={item.image} className="w-10 h-10" />
              <p>{item.price}</p>
              <input
                type="number"
                className="w-10 border-1"
                value={quantities[item._uid] || 1}
                onChange={(e) =>
                  handleQuantityChange(item._uid, e.target.value)
                }
              />
              <p className="subTotal font-bold">
                {"$" +
                  (
                    parseFloat(
                      item.price?.toString().replace(/[^0-9.-]+/g, "")
                    ) * (quantities[item._uid] || 1)
                  ).toFixed(2)}
              </p>
            </div>
            </ScrollSection>
          ))}

          <div className="flex justify-between items-center flex-col flex-col-reverse sm:flex-row">
            <p className="text-[11px] border-1 p-2 w-[120px] text-center self-start mt-8">
              <Link to="/shop">Return To Shop</Link>
            </p>

            <Bill totalAmount={totalAmount}/>
            </div>
        </ul>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <img
            src="/public/images/emptybox.jpeg"
            className="max-w-[200px] h-70 object-contain"
          />
          <p className="text-2xl font-bold text-center ">
            Your Cart Is Empty!
          </p>
        </div>
      )}
    </section>
  );
};

