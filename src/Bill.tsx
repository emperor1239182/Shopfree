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

      <button className="button">
        <Link to="/checkout">Proceed To Checkout</Link>
      </button>
    </div>
  );
};
