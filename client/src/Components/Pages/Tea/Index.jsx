import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./tea.module.css";
import Loading from "../../Containers/Loading/Index";


function Tea() {
    const [dataTeas, setDataTeas] = useState(null);
    const [categories, setCategories] = useState(null);

    const [dataTeasByCategory, setDataTeasByCategory] = useState(null);

    useEffect( () => {
        async function getData() {
            try {
                const result1 = await (
                await fetch("/api/v1/tea/all") 
                ).json();
                setDataTeas(result1.data);

                const result2 = await (
                await fetch("/api/v1/category/all") 
                ).json();
                setCategories(result2.data);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    }, []);

    useEffect( () => {
        const data = [];
        if (categories) {
            for (const category of categories) {
                data.push({
                    category: category,
                    teas: dataTeas.filter(el => el.category_id === category.id)
                })
            }
        }
        setDataTeasByCategory(data);
    }, [categories])


    return (
        <main className={styles.container}>
            {/* <!-------- sections ----------> */}
            {!dataTeasByCategory ? (
                    <Loading />
                ) : (
                    dataTeasByCategory.map(datas => {
                    return(
                        <section key={datas.category.id}>
                            <article className={styles.desktop_horizontal}>
                                <img
                                    src={
                                        "/img/category/" + datas.category.url_image
                                    }
                                    alt=""
                                />
                                <div>
                                    <div className={styles.article_title_with_bar_right}>
                                    <h2>{datas.category.label}</h2>
                                    </div>   
                                    <p className={styles.t_align_l}>{datas.category.description}</p>
                                </div>     
                            </article>

                            {datas.teas.map(data => {
                                return(
                                    <article key={data.id}>
                                        <h3>{data.label_1}</h3>
                                        <Link to={data.url_tea + "/" + data.id}><img
                                        src={"/img/tea/" + data.url_image}
                                        alt="" /></Link>
                                        <p>À partir de<br/>
                                        {data.price.replace(".", ",")}€
                                        </p>
                                        <Link to={data.url_tea + "/" + data.id} className={styles.see_product_btn}>voir ce produit</Link>
                                    </article>
                                    )
                                }) 
                            }

                        </section> 
                    )}
                    )
                )
            }
        </main>
    )
}

export default Tea;