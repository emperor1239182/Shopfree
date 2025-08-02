export const Account = ()=> {
    return(
        <>
        <section className="account">

            <div className="manageAccount">
                 <h3>Manage My Account</h3>
                 <p>My Profile</p>
                 <p>Adress Book</p>
                 <p>My Payment Options</p>
                 <h3>My Orders</h3>
                 <p>My Returns</p>
                 <p>My Cancellations</p>
                 <h3>My Wishlist</h3>
            </div>

            <div className="infos">
                <form>
                    <p>Edit Your Profile</p>

                    <div>
                       <label htmlFor="firstname"> First Name</label>
                       <input type="text" id="firstname" name="firstname"/>
                    </div>
                    <div>
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" name="lastname"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email"/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" name="address"/>
                    </div>
                    <div>
                        <h3>Password Changes</h3>
                        <input type="password" id="oldPassword" name="oldPassword" placeholder="Current Password"/>
                        <input type="password" id="newPassword" name="newPassword" placeholder="New Password"/>
                        <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password"/>
                    </div>
                    <p>Cancel</p>
                    <p>Save Changes</p>
                </form>
            </div>

        </section>
        </>
    )
}