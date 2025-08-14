import { Link } from "react-router-dom";

type BillProps = {
  totalAmount: number;
};

export const Bill = ({ totalAmount }: BillProps) => {
  return (
    <div className="bill">
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
        <Link to="/checkout">Proceed To Checkout</Link>
      </button>
    </div>
  );
};
