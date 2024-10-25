import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./tea.module.css";
import global from "../../../app.module.css";
import Loading from "../../Containers/Loading/Index";

function Tea() {
    const [teas, setTeas] = useState([]);
    const [categories, setCategories] = useState([]);
    const [teasByCategory, setTeasByCategory] = useState([]);

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
        if (categories.length) {
            for (const category of categories) {
                data.push({
                    category: category,
                    teas: teas.filter(tea => tea.category_id === category.id)
                })
            }
        }
        setTeasByCategory(data);
    }, [categories.length])


    return (
        <main>
            <section>
                <h1 className={global.hidden}>Thés</h1>

                {/* <!-------- sections ----------> */}
                {!teasByCategory ? (
                        <Loading />
                    ) : (
                        teasByCategory.map(data => {
                            return(
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

                                {data.teas.map(data => {
                                    return(
                                        <article key={data.id}>
                                            <h3>{data.label_1}</h3>
                                            <Link to={`${data.url_tea}/${data.id}`}><img
                                            src={`/img/tea/${data.url_image}`}
                                            alt="" /></Link>
                                            <p>À partir de<br/>
                                                <span className={global.price}>{data.price.replace(".", ",")}€</span>
                                            </p>
                                            <Link to={`${data.url_tea}/${data.id}`} className={global.main_btn}>voir ce produit</Link>
                                        </article>
                                        )
                                    }) 
                                }

                            </section> 
                        )}
                        )
                    )
                }
            </section>
        </main>
    )
}

export default Tea;