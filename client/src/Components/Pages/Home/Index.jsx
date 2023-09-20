import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./home.module.css";
import Loading from "../../Containers/Loading/Index";

function Home() {
    const [categories, setCategories] = useState(null);
    const [lastInserted, setLastInserted] = useState(null);
    const [bestSeller, setBestSeller] = useState('');
    const [favorite, setFavorite] = useState(null);

    // récupère et mets à jour une state pour les catégories
    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/category/all")
                ).json();
                setCategories(result.data)
            } catch (err) {
                throw Error(err);
            }
        }

        getData();
    }, []);

    // récupère et mets à jour une state pour le dernier thé insérer en BDD

    // récupère et mets à jour une state pour le thé meilleur vente

    // récupère et mets à jour une state pour le thé coup de coeur

    return (
        <main className={styles.container}>
            {/* <!-------- choisissez votre thé ----------> */}
            <article className={styles.select_a_tea}>
                <div className={styles.article_title_with_bar}>
                    <h2>Choissisez votre thé</h2>
                </div>
                <div className={styles.select_a_tea_flex}>
                    {!categories ? (
                        <Loading />
                    ) : (
                        categories.map((data) => {
                        <Link to={"/"} key={data.id}>
                            <img src={""} alt="" />
                            <h3>{data.label_1}</h3>
                        </Link>
                        })
                    )}
                </div>
            </article>

            
        </main>
    )
}

export default Home;