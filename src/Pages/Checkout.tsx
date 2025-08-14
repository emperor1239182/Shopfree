import { useState } from "react";
import { useCart } from "../ScrollContext";
import { Link } from "react-router-dom";

export const Checkout = () => {
  const { cartWithIds, totalAmount, quantities, Order } = useCart();
  const [selectedPayment, setSelectedPayment] = useState(""); // Track selected payment method

  return (
    <section className="mt-15 p-3 max-w-[400px] m-auto">
      {cartWithIds.map((item, index) => (
        <div key={index}>
          <ul className="flex flex-col justify-center">
            <li className="flex justify-between items-center text-[12px]">
              <div className="flex gap-3 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 object-contain"
                />
                <p>{item.name}</p>
              </div>
              <p className="subTotal font-bold">
                {"$" +
                  (
                    parseFloat(
                      item.price?.toString().replace(/[^0-9.-]+/g, "") || "0"
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
          <p>Free</p>
        </div>
        <div className="totalValues">
          <p>Total:</p>
          <p className="font-bold">${totalAmount.toFixed(2)}</p>
        </div>

        {/* Payment Option: Bank */}
        <div className="totalValues border-b-0">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="payment"
              value="bank"
              checked={selectedPayment === "bank"}
              onChange={(e) => setSelectedPayment(e.target.value)}
            />
            Bank
          </label>
          <img
            src="/Card types.png" // renamed to remove space (important for Vercel)
            alt="Card types"
            className="w-[90px]"
          />
        </div>

        {/* Payment Option: Cash On Delivery */}
        <label className="text-[11px] flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="cod"
            checked={selectedPayment === "cod"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          Cash On Delivery
        </label>

        <button className="bg-red-500 text-[9px] w-[120px] text-center rounded text-white p-2 mt-4 self-center">
          <Link to="/home" onClick={Order}>
            Place Order
          </Link>
        </button>
      </div>
    </section>
  );
};
