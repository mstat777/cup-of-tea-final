import styles from "./about.module.css";
import global from "../../../app.module.css";
import amelie from "../../../assets/img/autres/amelie.jpg";
import xavier from "../../../assets/img/autres/xavier.jpg";

function About() {

    return (
        <main>
            <section>
                <h1 className={global.hidden}>Notre histoire</h1>

                <section>
                    <h2>Notre équipe</h2>

                    <article className={styles.article_product}>
                        <h3>Amélie, fondatrice de Cup of Tea</h3>
                        <img src={amelie} alt="amélie" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis repellat maxime quod impedit laudantium aperiam deleniti soluta maiores, quas quia obcaecati alias aspernatur ipsa. Odio aperiam repellat numquam quia rerum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure vero fuga laborum impedit facilis tempora sed incidunt, earum aperiam officiis quo minima unde illo quae eum recusandae ut labore.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit cum ea nesciunt modi. Distinctio ipsam saepe laborum vel, necessitatibus nihil delectus quae corporis. Quibusdam ea magni laboriosam eaque cumque.</p>
                    </article>

                    <article className={styles.article_product}>
                        <h3>Xavier, fondateur de Cup of Tea</h3>
                        <img src={xavier} alt="xavier" />
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis repellat maxime quod impedit laudantium aperiam deleniti soluta maiores, quas quia obcaecati alias aspernatur ipsa. Odio aperiam repellat numquam quia rerum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure vero fuga laborum impedit facilis tempora sed incidunt, earum aperiam officiis quo minima unde illo quae eum recusandae ut labore.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit cum ea nesciunt modi. Distinctio ipsam saepe laborum vel, necessitatibus nihil delectus quae corporis. Quibusdam ea magni laboriosam eaque cumque.</p>
                    </article>
                </section>
                
                <article>
                    <h2>Notre concept</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iure vero fuga laborum impedit facilis tempora sed incidunt, earum aperiam officiis quo minima unde illo quae eum recusandae ut labore.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut sit cum ea nesciunt modi. Distinctio ipsam saepe laborum vel, necessitatibus nihil delectus quae corporis. Quibusdam ea magni laboriosam eaque cumque.</p>
                </article>
            </section>
        </main>
    )
}

export default About;