import Link from "next/link"
import styles from "../styles/404.module.css"
const PageNotFound = () => {
    return (
        <div className={styles.container}>
            <div className={styles.number}>404</div>
            <h1>Page Not Found</h1>
            <Link href='/'>
                <button className={styles.button}>Back To Home</button>
            </Link>
        </div>
    )
}

export default PageNotFound