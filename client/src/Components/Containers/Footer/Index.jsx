import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faLock, faMoneyBill1, faPhone, faTruck } from '@fortawesome/free-solid-svg-icons'
import styles from "./footer.module.css";
import logo_3wa from "../../../assets/img/autres/logo-3wa.png";

function Footer() {

    return (
        <div className={styles.footer}>

            <nav className={styles.footer_icons}>
                <div>
                    <FontAwesomeIcon icon={faLock}/>
                    <p>Paiment sécurisé</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faTruck}/>
                    <p>Ma livraison offerte</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faMoneyBill1}/>
                    <p>Carte de fidélité</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faPhone}/>
                    <p>Service client</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faCircleCheck}/>
                    <p>Garantie qualité</p>
                </div>
            </nav>

            <div className={styles.footer_links}>
                <nav>
                    <h2>Cup of tea</h2>
                    <a href="">Notre histoire</a>
                    <a href="">Nos boutiques</a>
                    <a href="">Le Thé de A à Z</a>
                    <a href="">Espace clients professionnels</a>
                    <a href="">Recrutement</a>
                    <a href="">Contactez-nous !</a>
                    <a href="">L'École de Thé</a>
                </nav>
                <nav>
                    <h2>Commandez en ligne</h2>
                    <a href="">Première visite</a>
                    <a href="">Aide - FAQ</a>
                    <a href="">Service client</a>
                    <a href="">Suivre ma commande</a>
                    <a href="">Conditions générales de vente</a>
                    <a href="">Informations légales</a>
                </nav>
                <nav>
                    <h2>Suivez-nous !</h2>
                    <a href="">Notre histoire</a>
                    <a href="">Nos boutiques</a>
                    <a href="">Le Thé de A à Z</a>
                    <a href="">Espace clients professionnels</a>
                </nav>
            </div>

            <div className={styles.footer_3WA}>
                <a rel="license" href="https://3wa.fr/propriete-materiel-pedagogique/"><img src={logo_3wa} alt="Propriété de la 3W Academy"/></a>
                
                <p>Cet exercice de <a rel="license" href="https://3wa.fr/">3W Academy</a> est mis à disposition <a rel="license" href="https://3wa.fr/propriete-materiel-pedagogique/">pour l'usage personnel des étudiants. Pas de Rediffusion - Attribution - Pas d'Utilisation Commerciale - Pas de Modification - International</a>. <br/>Les autorisations au-delà du champ de cette licence peuvent être obtenues auprès de <a rel="license" href="mailto:contact@3wa.fr">contact@3wa.fr</a>. Les maquettes ont été réalisées par <a href="#">Justine Muller</a>.</p>
            </div>
        </div>
    )
}

export default Footer;