import { useState } from "react";
import { Link } from "react-router-dom";
import { Footer } from "../Footer";

type InputType = string | number;

export const SignUp = () => {
    const [secondInput, setSecondInput] = useState<InputType>("");

    // Determine input type based on value
    const inputType = typeof secondInput === "number" ? "number" : "text";

    return (
        <>
            <section className="register">
                <img src="/public/images/Phone cart.png" className="max-w-[500px] hidden sm:block"/>

                <div className="signUp">
                    <h1 className="text-xl font-bold">Create an account</h1>
                    <p className="text-[9px]">Enter your details below</p>
                    <form className="flex flex-col">

                        <input type="text" name="name" className="input" placeholder="name" /> <br/>
                        <input
                            type={inputType}
                            className="input"
                            placeholder="Email or Phone Number"
                            value={secondInput}
                            onChange={e => {
                                const val = e.target.value;
                                setSecondInput(inputType === "number" ? Number(val) : val);
                            }}
                        /> <br/>

                        <input type="password" className="input" placeholder="password"/> <br/>

                        <div className="bg-red-600 p-1.5 text-center text-white text-[10px]"><input type="submit" value="Create Account"/></div>
                        <div className="border-1 text-[10px] text-center p-1.5 mt-4"><input type="submit" value="Sign up with Google"/> </div>
                        <p className="text-[12px] text-center mt-4">Already have an account?  <Link to="/login" className="underline">Log in</Link> </p>
                    </form>
                </div>
            </section>

            <Footer/>
        </>
    );
}