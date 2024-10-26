import spinner from "./spinner.svg";
import styles from "./loading.module.css";

function Loading() {
    return <img src={spinner} alt="spinner" className={styles.spinner}/>;
}

export default Loading;