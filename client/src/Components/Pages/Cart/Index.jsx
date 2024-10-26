import styles from './cart.module.css';
import global from "../../../app.module.css";
import { useEffect } from "react";
import { useSelector } from 'react-redux';
import Card from '../../Containers/Card/Index';
import Loading from '../../Containers/Loading/Index';
import { Link } from 'react-router-dom';

function Cart() {
    const { cartInfo } = useSelector((state) => state.cart);
    console.log(cartInfo);

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth'}) },[]);

    return (
        <main>
            <section>
                <h1 className={global.hidden}>Panier</h1>

                {!cartInfo ? <>
                        <Loading />
                    </> :
                    <>
                    {console.log(cartInfo)}
                    
                    {cartInfo.products.length ? 
                        cartInfo.products.map((product, i) => 
                            <Card type="cartItem" data={product} key={i}/>) :
                        <h2>Votre panier est vide</h2>
                    }</>
                } 

                <section className={styles.totals}>
                    <h2>Total à payer/TTC : {cartInfo.totalPrice}€</h2>

                    <Link to="/paiement" className={global.main_btn}>vers le paiement</Link>
                </section>

            </section>
        </main>
    );
}

export default Cart;