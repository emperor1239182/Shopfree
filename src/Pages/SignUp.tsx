import { useState, type ChangeEvent } from "react";
import { Link } from "react-router-dom";

type InputType = string | number;

export const SignUp = () => {
  const [secondInput, setSecondInput] = useState<InputType>("");

  // Decide the HTML input type based on value
  const inputType: "text" | "number" = typeof secondInput === "number" ? "number" : "text";

  const handleSecondInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // If the inputType is "number" and val is a valid number, store as number
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
        <h1 className="text-xl font-bold">Create an account</h1>
        <p className="text-[9px]">Enter your details below</p>
        <form className="flex flex-col">
          <input type="text" name="name" className="input" placeholder="Name" /> <br />
          <input
            type={inputType}
            className="input"
            placeholder="Email or Phone Number"
            value={secondInput}
            onChange={handleSecondInputChange}
          />{" "}
          <br />
          <input type="password" className="input" placeholder="Password" /> <br />

          <div className="bg-red-600 p-1.5 text-center text-white text-[10px]">
            <Link to="/login"><input type="submit" value="Create Account" /></Link> 
          </div>
          <div className="border-1 text-[10px] text-center p-1.5 mt-4">
            <input type="submit" value="Sign up with Google" /> 
          </div>
          <p className="text-[12px] text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
