import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../Containers/Loading/Index";
import styles from "./detail.module.css";
import global from "../../../app.module.css";
import { setCart } from "../../../store/slices/cart";
import { calculateCartTotal } from "../../Functions/utils";

function Detail() {
    const { cartInfo } = useSelector((state) => state.cart);
    const { userInfo } = useSelector((state) => state.user);
    const params   = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [tea, setTea] = useState({}); // le thé choisi
    const [packages, setPackages] = useState([]);
    const [index, setIndex] = useState(0); // l'indice du package sélectionné

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth'}) },[]);

    useEffect(() => {
        async function getTeaData() {
            try {
                const res = await fetch(`/api/v1/tea/${params.id}/${params.url_tea}`);
                if(res.status === 404) {
                    navigate("/not-found");
                }
                if(res.status === 200){
                    const json = await res.json();
                    setTea(json);
                }
            } catch (error) {
                throw new Error(error);
            }
        }

        if (params.url_tea && params.id) {
            getTeaData();
        }
    }, [params.url_tea, params.id]);

    useEffect(() => {
        async function getTeaPackages() {
            try {
                const res = await (
                        await fetch(`/api/v1/tea/packages/${params.id}`)
                    ).json();
                setPackages(res);
            } catch (error) {
                throw new Error(error);
            }
        }

        if (tea) {
            getTeaPackages();
        }
    }, [tea]);

    function handleAddToCart() {
        // cherche si un produit avec cette réf a déjà été ajouté au panier et si oui, à quelle position dans le tableau de produits
        const indexProduct = cartInfo.products.findIndex(
            (product_cart) => product_cart.ref === packages[index].ref
        );

        let newCart = {};

        // dans le cas il n'existe pas dans le panier, la fonction findIndex retourne une valeur '-1'
        if (indexProduct === -1) {
            // on crée un nouveau panier à la base de l'ancien et on l'enregistre dans localstorage
            newCart = {
                products: [
                    ...cartInfo.products,
                    { label_1: tea.label_1,
                      ref: packages[index].ref, 
                      quantity: 1, 
                      priceEach: parseFloat(packages[index].price),
                      url_image: tea.url_image}
                ],
                totalPrice: cartInfo.totalPrice,
                buyer: userInfo.email
            }
        } else {
            newCart = {
                products: [
                    ...cartInfo.products
                ],
                totalPrice: cartInfo.totalPrice,
                buyer: userInfo.email
            }
            // vu que le produit existe déjà dans le panier, on modifie juste la quantité:
            newCart.products[indexProduct] = {
                ...newCart.products[indexProduct],
                quantity: cartInfo.products[indexProduct].quantity + 1
            }
        }

        newCart.totalPrice = calculateCartTotal(newCart.products);
        dispatch(setCart(newCart));
        localStorage.setItem("cart", JSON.stringify(newCart));
    }

    return (
        <main>
            <section>
                <h1 className={global.hidden}>Détail</h1>
                {
                !tea || !packages.length ? (
                    <Loading />
                ) : (
                    <article className={styles.article_product}>
                        <div>
                            {console.log(tea)}
                            <h3>{tea.label_1}</h3>
                            <p className={styles.bold_subtitle}>{tea.label_2}</p>
                            <p><i>Ref : {tea.ref}</i></p>
                            <a href="#"><p className={styles.green}>Voir les 56 avis clients</p></a>
                        </div>

                        <div>
                            <img src={"/img/tea/"+tea.url_image} alt="" />

                            <select name="object"
                                    onChange={(e) => {
                                        setIndex(parseInt(e.target.value) - 1);
                                    }}>
                                {packages.map(pack => (
                                    <option 
                                        key={pack.packaging_id}
                                        value={pack.packaging_id}>
                                            Pochette de {pack.title}
                                    </option>
                                ))}
                            </select>

                            <p className={styles.large_text}>{packages[index].price}€</p>
                            <button className={global.main_btn}
                                onClick={() => handleAddToCart()}>Ajouter au panier</button>

                            <a href="#" className={styles.add_to_wishlist}>
                                <p><i className={`${styles.fa_solid} ${styles.fa_heart}`}></i>Ajouter à ma liste d'envie</p>
                            </a>
                        </div>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Itaque aliquid non omnis aperiam quia accusamus repellendus quo reprehenderit 
                            dicta enim, rerum dolorem quisquam, sit rem molestiae, debitis blanditiis quidem ratione?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Ex repellendus adipisci laudantium exercitationem! 
                            Magni natus facere, assumenda quisquam voluptatum beatae mollitia cumque, perspiciatis modi vel harum aliquid! 
                            Velit, distinctio saepe adipisci neque numquam fugit, pariatur corporis suscipit accusamus omnis aliquid!</p>
                        <p className={styles.bold}>Profitez d'une remise de 5% sur la pochette de 500g (prix déjà remisé).</p>
                        <p className={styles.bold}>Profitez d'une remise de 10% sur le lot de 2 pochettes de 500g (prix déjà remisé).</p>
                    </article>
                    )
                }
            </section>
        </main>
    )
}

export default Detail;