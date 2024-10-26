import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import styles from "./header.module.css";
import logo from "../../../assets/img/autres/logo.png";
import Ribbon from "../../../assets/img/autres/Ribbon.jsx";

function Header() {
    const { userInfo } = useSelector(state => state.user);
    const { cartInfo } = useSelector(state => state.cart);

    return (  
        <header className={styles.header}>
        
        <p className={styles.header_promo}>Livraison offerte à partir de 65€ d'achat !</p>
        
        <div className={`${styles.header_inner} ${styles.container}`}>

            <div className={styles.logo_and_cart_div}>
                <Link to="/" className={styles.logo_ctn}><img src={logo} alt="Une tasse de thé"/></Link>
                <Link to="/panier" className={styles.cart_ctn}>
                    <p className={`${styles.cart_name_txt} ${styles.mobile_hidden}`}>Mon panier</p>
                    <div className={styles.cart_svg_ctn}>
                        <FontAwesomeIcon icon={faCartShopping} className={`${styles.fa_solid} ${styles.fa_cart_shopping}`}/>
                    </div>
                    {cartInfo.totalPrice &&
                    <p className={styles.price_txt}>{cartInfo.totalPrice}€</p>}
                </Link>
            </div>

            <nav className={styles.header_nav}>
            <NavLink to="/">accueil</NavLink>
            <NavLink to="/the">thés</NavLink>
            <NavLink to="/notre-histoire">notre histoire</NavLink>

            {!userInfo.isLogged ? 
                <NavLink to="/utilisateur/connexion" 
                        title="vers le formulaire de connexion">
                connexion</NavLink> :
                <>
                <NavLink
                to="/utilisateur/dashboard"
                title="aller à votre espace personnel"
                >dashboard</NavLink>
                <NavLink
                to="/utilisateur/deconnexion"
                title="Se déconnecter"
                >déconnexion</NavLink>
                </>
            }
            </nav>

        </div>

        {/* <!---------- Elu melleur thé ------------> */}
        <div className={`${styles.mobile_hidden} ${styles.ribbon}`}>
            <Ribbon />
        </div>
        
        </header>
    )
}
  
export default Header;