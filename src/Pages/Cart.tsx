import {  useState } from "react";
import type { ChangeEvent } from "react";
import { useCart } from "../ScrollContext";
import { Link } from "react-router-dom";
import { Bill } from "../Bill";
import { ScrollSection } from "./Framer";

type CartItem = {
  _uid: string;
  image: string;
  price: string | number;
};

export const Cart = () => {
  const { cartWithIds, handleQuantityChange, totalAmount, quantities } = useCart() as {
    cartWithIds: CartItem[];
    handleQuantityChange: (uid: string, value: number) => void;
    totalAmount: number;
    quantities: Record<string, number>;
  };

  // Local state for editable quantities
  const [tempQuantities, setTempQuantities] = useState<Record<string, string>>({});

  const handleChange = (uid: string, value: string) => {
    // Let input hold any value, including empty string
    setTempQuantities((prev) => ({ ...prev, [uid]: value }));
  };

  const handleBlur = (uid: string, value: string) => {
    // If empty or invalid, revert to 1
    const num = Number(value);
    const finalValue = isNaN(num) || num <= 0 ? 1 : num;
    handleQuantityChange(uid, finalValue);
    setTempQuantities((prev) => ({ ...prev, [uid]: String(finalValue) }));
  };

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

          {cartWithIds.map((item, index) => {
            const displayValue =
              tempQuantities[item._uid] ?? String(quantities[item._uid] || 1);

            return (
              <ScrollSection key={item._uid || index}>
                <div className="invoice">
                  <img src={item.image} alt="" className="w-10 h-10" />
                  <p>{item.price}</p>
                  <input
                    type="number"
                    className="w-10 border-1"
                    value={displayValue}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      handleChange(item._uid, e.target.value)
                    }
                    onBlur={(e) => handleBlur(item._uid, e.target.value)}
                  />
                  <p className="subTotal font-bold">
                    {"$" +
                      (
                        parseFloat(
                          item.price?.toString().replace(/[^0-9.-]+/g, "") || "0"
                        ) * (quantities[item._uid] || 1)
                      ).toFixed(2)}
                  </p>
                </div>
              </ScrollSection>
            );
          })}

          <div className="flex justify-between items-center flex-col flex-col-reverse sm:flex-row">
            <p className="text-[11px] border-1 p-2 w-[120px] text-center self-start mt-8">
              <Link to="/shop">Return To Shop</Link>
            </p>
            <Bill totalAmount={totalAmount} />
          </div>
        </ul>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <img
            src="/emptybox.jpeg"
            alt="Empty cart"
            className="max-w-[200px] h-70 object-contain"
          />
          <p className="text-2xl font-bold text-center">Your Cart Is Empty!</p>
        </div>
      )}
    </section>
  );
};
