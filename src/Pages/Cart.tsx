import { useMemo, useState } from "react";
import { useCart } from "../ScrollContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart } = useCart();
  const [quantities, setQuantities] = useState({});

  // Generate stable IDs for each product if missing
  const cartWithIds = useMemo(() => {
    return cart.map((item, index) => ({
      ...item,
      _uid: item.id ?? `${item.name}-${index}` // fallback ID
    }));
  }, [cart]);

  const handleQuantityChange = (uid, value) => {
    setQuantities((prev) => ({
      ...prev,
      [uid]: Number(value)
    }));
  };

  const totalAmount = cartWithIds.reduce((sum, item) => {
    const numericPrice = parseFloat(
      item.price?.toString().replace(/[^0-9.-]+/g, "")
    );
    const qty = quantities[item._uid] || 1;
    return sum + (numericPrice * qty || 0);
  }, 0);

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

          {cartWithIds.map((item) => (
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
          ))}

          <div className="flex justify-between items-center flex-col flex-col-reverse sm:flex-row">
            <p className="text-[11px] border-1 p-2 w-[120px] text-center self-start mt-8">
              <Link to="/shop">Return To Shop</Link>
            </p>

            <div className="bill w-[250px] border-2 border-gray-300 p-2 mt-8 flex flex-col gap-2 justify-center">
              <p className="font-bold">Cart Total</p>
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
              <button className="bg-red-500 text-[9px] w-[120px] text-center rounded text-white p-2 mt-4 self-center">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </ul>
      ) : (
        <div className="flex justify-center flex-col items-center">
          <img
            src="/public/images/emptybox.jpeg"
            className="max-w-[300px] h-70 object-contain"
          />
          <p className="text-2xl font-bold text-center ">
            Your Cart Is Empty!
          </p>
        </div>
      )}
    </section>
  );
};

