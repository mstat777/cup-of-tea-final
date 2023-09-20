import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./header.module.css";

import logo from "../../../assets/img/autres/logo.png";
import Ribbon from "../../../assets/img/autres/Ribbon.jsx";

function Header() {
  const { info } = useSelector(state => state.user);
  const { cartInfo } = useSelector(state => state.cart);

  function computeCart(){
    let sum = 0;
    for (const tea of cartInfo.product) {
        sum += tea.quantity * tea.priceEach;
    }
    return sum.toFixed(2);
  }

  return (  
    <header className={styles.header}>

      <div className={styles.header_upper_bar}>
          <p>Livraison offerte à partir de 65€ d'achat !</p>
      </div>
    
      <div className={`${styles.header_inner} ${styles.container}`}>
        <NavLink to={"/"}><img src={logo} alt=""/></NavLink>

        <NavLink to={"/panier"}>
            <p className={styles.mobile_hidden}>mon panier</p>
            <div>
                <i className={`${styles.fa_solid} ${styles.fa_cart_shopping}`}></i>
            </div>
            <p>{computeCart()}€</p>
        </NavLink>

        <nav className={styles.header_nav}>
          <NavLink to={"/"}>accueil</NavLink>
          <NavLink to={"/the"}>thés</NavLink>
          <NavLink to={"/notre-histoire"}>notre histoire</NavLink>

          {!info.isLogged ? 
            <NavLink to={"/utilisateur/connexion"} 
                    title="vers le formulaire de connexion">
              connexion</NavLink> :
            <>
              <NavLink
              to={"/utilisateur/dashboard"}
              title="aller à votre espace personnel"
              >dashboard</NavLink>
              <NavLink
              to={"/utilisateur/deconnexion"}
              title="Se déconnecter"
              >déconnexion</NavLink>
            </>
          }
          
        </nav>
      </div>

      {/* <!---------- Elu melleur thé ------------> */}
      <div className={styles.mobile_hidden}>
        <Ribbon />
      </div>
    
    </header>
  )
}
  
export default Header;