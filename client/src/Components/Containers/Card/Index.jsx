import { Link } from 'react-router-dom';
import styles from './card.module.css';

function Card(props) {
    const { type, data, title } = props;

    return (
        <>
        {type === "categories" && 
            <article>
                <div className={styles.article_title_with_bar}>
                    <h2>Choissisez votre thé</h2>
                </div>
                {data.map(el =>
                    <figure key={el.id} className={styles.category_ctn}>
                        <img src={`img/tea/${el.id}.jpg`} alt={`la catégorie #${el.id}`}/>
                        <figcaption>{el.label}</figcaption>
                    </figure>
                )}
            </article>
        }

        {type === "tea" && 
            <article>
                <div className={styles.article_title_with_bar}>
                    <h2>{title}</h2>
                </div>
                <figure className={styles.tea_ctn}>
                    <img src={`img/product/${data.url_image}`} alt={` #${data.label_1}`}/>
                    <figcaption>{data.label_1}</figcaption>
                </figure>
                <p>{data.description}</p>
                <p>À partir de<br/>price€</p>
                <Link to={`/the/${data.label_1}/${data.id}`}>voir ce produit</Link>
            </article>}
        </>
    )
}

export default Card;