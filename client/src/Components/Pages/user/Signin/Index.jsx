import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import styles from "./signin.module.css";
import { signIn } from "../../../../store/slices/user";

function Signin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const [label, setLabel] = useState("");
    const [password, setPassword] = useState("");

    const [ msg, setMsg ] = useState(null);

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await fetch("/api/v1/user/signin", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ label, password }),
        });
        const json = await res.json();
        setMsg(json.msg);

        if ( res.status === 200) {
            localStorage.setItem("auth", json.TOKEN);
            dispatch(signIn(label));
            navigate("/");
        }
        
    }

    return (
        <main>
            <section>
                <h1>connexion</h1>

                <form onSubmit={handleSubmit}>
                    <label htmlFor="label">Alias : </label>
                    <input
                        type="text"
                        name="label"
                        value={label}
                        onChange={(e) => setLabel(e.target.value)}
                    />
                    <label htmlFor="password">Mot de passe : </label>
                    <input 
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input type="submit" value="se connecter" />
                </form>
                <p>Vous n'avez pas de compte ? {" "}
                En créer un <Link to="/signup">ici</Link>.</p>
            </section>
        </main>
    );
}

export default Signin;