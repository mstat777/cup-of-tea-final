import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./home.module.css";
import global from "../../../app.module.css";
import Loading from "../../Containers/Loading/Index";
import Card from "../../Containers/Card/Index";

function Home() {
    const [categories, setCategories] = useState([]);
    const [lastInserted, setLastInserted] = useState({});
    const [bestSeller, setBestSeller] = useState({});
    const [favorite, setFavorite] = useState({});

    // récupère les catégories
    useEffect(() => {
        async function getData() {
            try {
                const result = await (
                    await fetch("/api/v1/category/all")
                ).json();
                setCategories(result);
            } catch (err) {
                throw Error(err);
            }
        }

        getData();
    }, []);

    // récupère le dernier thé insérer en BDD
    useEffect(() => {
        async function getLastTea() {
            try {
                const result = await (
                    await fetch("/api/v1/tea/last")
                ).json();
                setLastInserted(result);
            } catch (err) {
                throw Error(err);
            }
        }

        getLastTea();
    }, []);

    // récupère le thé meilleur vente

    // récupère le thé coup de coeur

    return (
        <main>
            <section>
                <h1 className={global.hidden}>Accueil</h1>

                {/* <!-------- choisissez votre thé ----------> */}
                {(!categories.length || !lastInserted) ? 
                    <Loading /> : 
                <section>
                    <Card type="categories" data={categories}/>
                    <Card type="tea" data={lastInserted} title="Notre nouveauté"/>
                </section>}

            </section>
        </main>
    )
}

export default Home;