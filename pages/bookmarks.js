import Link from "next/link"
import styles from "../styles/Bookmarks.module.css"

const Bookmarks = () => {
    return (
        <div className={styles.container}>
            <h1>Saved Products</h1>
            <Link href='/'>
                <button className={styles.button}>Back To Home</button>
            </Link>
        </div>
    )
}

export default Bookmarks