import styles from './payment.module.css';
import global from '../../../app.module.css';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

function Cart() {
    const { cartInfo } = useSelector((state) => state.cart);
    const [msg, setMsg] = useState('');

    useEffect(() => { window.scrollTo({ top: 0, behavior: 'smooth'}) },[]);

    async function handlePayment(){
        const res = await fetch("/api/v1/order/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ cartInfo })
        });
        const json = await res.json();
        setMsg(json.msg);
    }

    return (
        <main>
            <section>
                <h1>Paiement</h1>

                <section className={styles.totals}>
                    <h2>Total à payer/TTC :<br/> 
                        {cartInfo.totalPrice}€</h2>

                    <button onClick={handlePayment} className={global.main_btn}>commander</button>
                </section>

            </section>
        </main>
    );
}

export default Cart;