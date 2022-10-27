import Link from "next/link"
import styles from "../styles/Profile.module.css"

const Profile = () => {
    return (
        <div className={styles.container}>
            <h1>Profile Page</h1>
            <Link href='/'>
                <button className={styles.button}>Back To Home</button>
            </Link>
        </div>
    )
}

export default Profile