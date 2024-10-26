import { Link } from 'react-router-dom';
import styles from './card.module.css';
import global from '../../../app.module.css';

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
                { console.log(data)}
                <div className={styles.article_title_with_bar}>
                    <h2>{title}</h2>
                </div>
                <figure className={styles.tea_ctn}>
                    <img src={`img/products/${data.url_image}`} alt={`thé #${data.label_1}`}/>
                    <figcaption>{data.label_1}</figcaption>
                </figure>
                <p>{data.description}</p>
                <p>À partir de<br/>
                <span className={global.price}>{data.price}€</span></p>
                <Link to={`/the/${data.url_tea}/${data.id}`} className={global.main_btn}>voir ce produit</Link>
            </article>
        }

        {type === "cartItem" && 
            <article>
                {console.log(data)}
                <div className={styles.article_title_with_bar}>
                    <h2>{data.label_1}</h2>
                </div>

                <img src={`img/products/${data.url_image}`} alt={`thé #${data.label_1}`} className={styles.cart_item_img_ctn}/>

                <div className={styles.cart_item_info_ctn}>
                    <p><i>Ref : {data.ref}</i></p>
                    <p>Nombre d'articles : {data.quantity}</p>
                    <p>Prix / article : {data.priceEach}€</p>
                    <p>Prix total : {data.quantity * data.priceEach}€</p>
                </div>
            </article>
        }
        </>
    )
}

export default Card;