import notfound from "./404.jpg";

function NotFound() {
    return (
        <main>
            <section>
                <img src={notfound} alt="Page non trouvée" />
            </section>
        </main>
    )
}

export default NotFound;