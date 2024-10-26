import './app.module.css';
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Containers/Header/Index";
import Footer from "./Components/Containers/Footer/Index";
import Signin from "./Components/Pages/user/Signin/Index";
import Signout from "./Components/Pages/user/Signout/Index";
import Signup from "./Components/Pages/user/Signup/Index";
import Home from "./Components/Pages/Home/Index";
import Tea from "./Components/Pages/Tea/Index";
import Detail from "./Components/Pages/Detail/Index";
import About from "./Components/Pages/About/Index";
import Cart from "./Components/Pages/Cart/Index";
import Payment from "./Components/Pages/Payment/Index";

import NotFound from "./Components/Pages/NotFound/Index";

function App() {
  
  return (  
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/the">
          <Route path="" element={<Tea />} />
          <Route path=":url_tea/:id" element={<Detail />} />
        </Route>

        <Route path="/notre-histoire" element={<About />} />

        <Route path="/utilisateur">
          <Route path="connexion" element={<Signin />} />
          <Route path="deconnexion" element={<Signout />} />
          <Route path="signup" element={<Signup />} />
        </Route>

        <Route path="/panier" element={<Cart />} />

        <Route path="/paiement" element={<Payment />} />

        <Route path="/not-found" element={<NotFound/>} />
      </Routes>   

      <Footer />
    </>
  )
}

export default App;