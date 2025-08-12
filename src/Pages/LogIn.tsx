import { useState } from "react";
import { Link } from "react-router-dom";

type InputType = string | number;

export const Login = () => {
    const [secondInput, setSecondInput] = useState<InputType>("");

    // Determine input type based on value
    const inputType = typeof secondInput === "number" ? "number" : "text";

    return (
        <>
            <section className="register">
                <img src="/public/images/Phone cart.png" className="max-w-[500px] hidden sm:block"/>

                <div className="signUp">
                    <h1 className="text-xl font-bold">Log in to Exclusive</h1>
                    <p className="text-[9px]">Enter your details below</p>
                    <form className="flex flex-col">

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
                        <div className="flex flex-col gap-4">
                        <div className="bg-red-600 p-1.5 text-center text-white text-[12px]"><input type="submit" value="Log in"/></div>
                        <Link to="/login" className="underline text-[9px]">Forget Password?</Link> 
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}