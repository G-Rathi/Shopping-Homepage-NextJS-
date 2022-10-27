import Link from "next/link"
import styles from "../styles/Cart.module.css"

const Cart = () => {
    return (
        <div className={styles.container}>
            <h1>Cart Page</h1>
            <Link href='/'>
                <button className={styles.button}>Back To Home</button>
            </Link>
        </div>
    )
}

export default Cart