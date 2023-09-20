import styles from "./footer.module.css";

import logo_3wa from "../../../assets/img/autres/logo-3wa.png";

function Footer() {

    return (
        <div className={styles.footer}>

            <nav className={styles.footer_nav}>
                <a href="#">
                    <i className={`${styles.fa_solid} ${styles.fa_lock}`}></i>
                    <p>Paiment sécurisé</p>
                </a>
                <a href="#">
                    <i className={`${styles.fa_solid} ${styles.fa_truck}`}></i>
                    <p>Ma livraison offerte</p>
                </a>
                <a href="#">
                    <i className={`${styles.fa_regular} ${styles.fa_money_bill_1}`}></i>
                    <p>Carte de fidélité</p>
                </a>
                <a href="#">
                    <i className={`${styles.fa_solid} ${styles.fa_phone}`}></i>
                    <p>Service client</p>
                </a>
                <a href="#">
                    <i className={`${styles.fa_solid} ${styles.fa_circle_check}`}></i>
                    <p>Garantie qualité</p>
                </a>
            </nav>

            <div className={styles.footer_inner}>
                <nav>
                    <p className={styles.footer_inner_title}>Cup of tea</p>
                    <a href="">Notre histoire</a>
                    <a href="">Nos boutiques</a>
                    <a href="">Le Thé de A à Z</a>
                    <a href="">Espace clients professionnels</a>
                    <a href="">Recrutement</a>
                    <a href="">Contactez-nous !</a>
                    <a href="">L'École de Thé</a>
                </nav>
                <nav>
                    <p className={styles.footer_inner_title}>Commandez en ligne</p>
                    <a href="">Première visite</a>
                    <a href="">Aide - FAQ</a>
                    <a href="">Service client</a>
                    <a href="">Suivre ma commande</a>
                    <a href="">Conditions générales de vente</a>
                    <a href="">Informations légales</a>
                </nav>
                <nav>
                    <p className={styles.footer_inner_title}>Suivez-nous !</p>
                    <a href="">Notre histoire</a>
                    <a href="">Nos boutiques</a>
                    <a href="">Le Thé de A à Z</a>
                    <a href="">Espace clients professionnels</a>
                </nav>
            </div>

            <div className={styles.footer_3WA}>
                <div className={styles.container}>
                    <a rel="license" href="https://3wa.fr/propriete-materiel-pedagogique/"><img src={logo_3wa} alt="Propriété de la 3W Academy"/></a>
                    
                    <p>Cet exercice de <a rel="license" href="https://3wa.fr/">3W Academy</a> est mis à disposition <a rel="license" href="https://3wa.fr/propriete-materiel-pedagogique/">pour l'usage personnel des étudiants. Pas de Rediffusion - Attribution - Pas d'Utilisation Commerciale - Pas de Modification - International</a>. <br/>Les autorisations au-delà du champ de cette licence peuvent être obtenues auprès de <a rel="license" href="mailto:contact@3wa.fr">contact@3wa.fr</a>. Les maquettes ont été réalisées par <a href="#">Justine Muller</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;