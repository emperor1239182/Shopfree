import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

type InputType = string | number;

export const Login = () => {
  const [secondInput, setSecondInput] = useState<InputType>("");

  // Decide the HTML input type based on current state
  const inputType: "text" | "number" = typeof secondInput === "number" ? "number" : "text";

  const handleSecondInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSecondInput(inputType === "number" && !isNaN(Number(val)) ? Number(val) : val);
  };

  return (
    <section className="register">
      <img
        src="/Phone cart.png"
        className="max-w-[500px] hidden sm:block"
        alt="Phone cart"
      />

      <div className="signUp">
        <h1 className="text-xl font-bold">Log in to Exclusive</h1>
        <p className="text-[9px]">Enter your details below</p>
        <form className="flex flex-col">
          <input
            type={inputType}
            className="input"
            placeholder="Email or Phone Number"
            value={secondInput}
            onChange={handleSecondInputChange}
          />
          <br />
          <input type="password" className="input" placeholder="Password" /> <br />
          <div className="flex flex-col gap-4">
            <div className="bg-red-600 p-1.5 text-center text-white text-[12px]">
             <Link to="/home"> <input type="submit" value="Log in" /> </Link>
            </div>
            <Link to="/login" className="underline text-[9px]">
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};
