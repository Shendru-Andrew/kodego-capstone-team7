import { useState } from 'react'
import Login from './pages/auth/login.jsx'
import Register from './pages/auth/registration'
import Home2 from './pages/home/home.jsx'
import { Routes, Route } from 'react-router-dom'
import routes from './routes'
import './App.css'
import './Color.css'

import Sidebar from "./components/auth-sidebar/sidebar.jsx"

import MainSidebar from './components/main-sidebar/sidebar'
import Products from './pages/products/Products.jsx'
import Navbar from './components/navbar/navbar'
import WebRegister from './pages/web-register/WebRegister.jsx'
import ProductGroup from './pages/product-group/ProductGroup.jsx'
import LandingPage from './pages/landing-page/landing_page.jsx'
import LandingLogin from './pages/landing-login/landing_login.jsx'
import LandingRegister from './pages/landing-register/landing_register.jsx'
import Transaction from './pages/transaction-page/Transaction.jsx'
import Dashboard from './pages/dashboard/Dashboard.jsx'


function App() {

  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('user'))

  return (
    <>
      {!loggedIn ? 
      <main>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/login"} element={<LandingLogin />} />
        <Route path={"/register"} element={<LandingRegister />} />
      </Routes>
      </main>
      : 
      <main className='flex bg-gradient-to-t from-[#f3ad11] to-[#01366C]'>
        <MainSidebar />
        <section>
          <Navbar />
          <Routes>
            <Route path={"/"} element={<Dashboard />} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/webregister"} element={<WebRegister />} />
            <Route path={"/productgroup"} element={<ProductGroup />} />
            <Route path={"/transactions"} element={<Transaction />} />
          </Routes>
        </section>
      </main>}
    </>
  )
}

export default App