import { Footer } from "../Footer"
export const Account = ()=> {
    return(
        <>
        <section className="account">

            <div className="accountCenter">
                 <h3 >Manage My Account</h3>
                 <p>My Profile</p>
                 <p>Adress Book</p>
                 <p>My Payment Options</p>
                 <h3 className="font-bold">My Orders</h3>
                 <p>My Returns</p>
                 <p>My Cancellations</p>
                 <h3 className="font-bold">My Wishlist</h3>
            </div>

            <div className="infos ">
                <form className="accountInfo" name="accountInfo">
                    <p className="mb-2 font-bold text-red-500">Edit Your Profile</p>

                    <div className="flex gap-2 flex-wrap">
                    <div className="inputContainer">
                       <label htmlFor="firstname"> First Name</label> <br/>
                       <input type="text" id="firstname" name="firstname"/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="lastname">Last Name</label> <br/>
                        <input type="text" id="lastname" name="lastname"/>
                    </div>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                    <div className="inputContainer">
                        <label htmlFor="email">Email</label> <br/>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div className="inputContainer">
                        <label htmlFor="address">Address</label> <br/>
                        <input type="text" id="address" name="address"/>
                    </div>
                    </div>

                    <div className="inputContainer flex flex-col gap-3">
                        <h3 className="mt-6">Password Changes</h3>
                        <input type="password" id="oldPassword" name="oldPassword" placeholder="Current Password"/>
                        <input type="password" id="newPassword" name="newPassword" placeholder="New Password"/>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password"/>
                    </div>

                    <div className="flex items-center gap-2 absolute mt-3 right-1">
                    <p>Cancel</p>
                    <p className="bg-red-500 text-center text-white p-2 rounded">Save Changes</p>
                    </div>
                </form>
            </div>

        </section>
        <Footer/>
        </>
    )
}