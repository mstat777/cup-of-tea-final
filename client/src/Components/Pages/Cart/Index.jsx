import styles from './cart.module.css';
import global from "../../../app.module.css";
import { useState, useEffect } from "react";

function Cart() {

    return (
        <main>
            <section>
                <h1 className={global.hidden}>Panier</h1>
                <p>Panier</p>
            </section>
        </main>
    );
}

export default Cart;