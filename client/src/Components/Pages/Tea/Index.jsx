import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./tea.module.css";
import global from "../../../app.module.css";
import Loading from "../../Containers/Loading/Index";

function Tea() {
    const [teas, setTeas] = useState([]);
    const [categories, setCategories] = useState([]);
    const [teasByCategory, setTeasByCategory] = useState([]);

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth'}) },[]);

    useEffect(() => {
        async function getData() {
            try {
                const resultTeas = await (
                    await fetch("/api/v1/tea/all") 
                ).json();
                setTeas(resultTeas);

                const resultCategories = await (
                    await fetch("/api/v1/category/all") 
                ).json();
                setCategories(resultCategories);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    useEffect( () => {
        const data = [];
        if (categories.length && teas.length) {
            for (const category of categories) {
                data.push({
                    category: category,
                    teas: teas.filter(tea => tea.category_id === category.id)
                })
            }
        }
        setTeasByCategory(data);
    }, [categories.length, teas.length])

    return (
        <main>
            <section>
                <h1 className={global.hidden}>Thés</h1>

                {/* <!-------- sections ----------> */}
                {!teasByCategory.length ? 
                    <Loading /> : <>
                    {console.log(teasByCategory)}
                    {teasByCategory.map(data => 
                        <section key={data.category.id}>
                            <article className={styles.desktop_horizontal}>
                                <img
                                    src={`/img/category/${data.category.url_image}`}
                                    alt=""
                                />
                                <div>
                                    <div className={styles.article_title_with_bar_right}>
                                    <h2>{data.category.label}</h2>
                                    </div>   
                                    <p className={styles.t_align_l}>{data.category.description}</p>
                                </div>     
                            </article>

                            {data.teas.map(tea => 
                                <article key={tea.id}>
                                    <h3>{tea.label_1}</h3>
                                    <Link to={`${tea.url_tea}/${tea.id}`}><img
                                    src={`/img/tea/${tea.url_image}`}
                                    alt={tea.url_image} /></Link>
                                    <p>À partir de<br/>
                                        <span className={global.price}>{tea.min_price.replace(".", ",")}€</span>
                                    </p>
                                    <Link to={`${tea.url_tea}/${tea.id}`} className={global.main_btn}>voir ce produit</Link>
                                </article>) 
                            }

                        </section> )}
                        </>
                }
            </section>
        </main>
    )
}

export default Tea;