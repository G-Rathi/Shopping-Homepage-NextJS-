import Link from "next/link"
import BookmarkIcon from "../public/SVG_components/NavIcons/BookmarkIcon"
import SearchIcon from "../public/SVG_components/NavIcons/SearchIcon"
import ShoppingBagIcon from "../public/SVG_components/NavIcons/ShoppingBagIcon"
import UserAltIcon from "../public/SVG_components/NavIcons/UserAltIcon"
import styles from "../styles/Navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.logoText}>TANN TRIM</div>
            <div className={styles.navItems}>
                <Link href='#'><a className={styles.a}>Bags</a></Link>
                <Link href='#'><a className={styles.a}>Travel</a></Link>
                <Link href='#'><a className={styles.a}>Accesories</a></Link>
                <Link href='#'><a className={styles.a}>Gifting</a></Link>
                <Link href='#'><a className={styles.a}>Jewelery</a></Link>
            </div>
            <div className={styles.navIcons} >
                <Link href='#'><a className={styles.a}><SearchIcon /></a></Link>
                <Link href='/profile'><a className={styles.a}><UserAltIcon /></a></Link>
                <Link href='/bookmarks'><a className={styles.a}><BookmarkIcon /></a></Link>
                <Link href='/cart'><a className={styles.a}><ShoppingBagIcon /></a></Link>
            </div>
        </div>
    )
}

export default Navbar