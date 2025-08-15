import { Link } from "react-router-dom"
export const NoPage = ()=> {
    return(
        <>
        <section className="mt-20 flex flex-col justify-center items-center gap-10">
        <h1 className="font-extrabold text-5xl">404 Not Found</h1>
        <p className="font-bold text-[12px]">Your visisted page not found. You may go home page</p>
        <button className="button"><Link to="/home">Back to home page</Link> </button>
        </section>
        </>
    )
}