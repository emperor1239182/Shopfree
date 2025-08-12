import { BrowserRouter, Routes, Route } from "react-router-dom"
import { About } from "./Pages/About"
import { Contact } from "./Pages/Contact"
import { Home } from "./Pages/Home"
import { SignUp } from "./Pages/SignUp"
import { Cart } from "./Pages/Cart"
import { Layout } from "./Pages/Layout"
import { Account } from "./Pages/Account"
import { Wishlist } from "./Pages/Wishlist"
import { NoPage } from "./Pages/No page"
import { Login } from "./Pages/LogIn"
import { Shop } from "./Pages/Shop"

export const Router = ()=>{
    return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="signup" element={<SignUp/>}/>
          <Route path="cart" element={<Cart/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
          <Route path="account" element={<Account/>}/>
          <Route path="login" element={<Login/>}/>
          <Route path="shop" element={<Shop/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
    </Routes>
    </BrowserRouter>
  )
}