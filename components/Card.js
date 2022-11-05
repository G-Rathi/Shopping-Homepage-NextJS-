import Link from "next/link"
import ATC from "../public/SVG_components/ExtraIcons/ATC"
import CardBookmark from "../public/SVG_components/ExtraIcons/CardBookmark"
import styles from "../styles/Card.module.css"

const Card = (props) => {

    return (
        <Link href={props.product.product_url}>
            <div className={styles.cardContainer} >
                <Link href='#'><a className={styles.bookmark}><CardBookmark /></a></Link>
                <img className={styles.cardImage}
                    src={props.product.plpimaage}
                    alt='test picture'
                    width={284}
                    height={400}
                />
                <div className={styles.cardDetails}>
                    <span className={styles.productName}>
                        {props.product.name.length > 23 ? props.product.name.slice(0, 21) + '...' : props.product.name}
                    </span>
                    <div className={styles.price_cart}>
                        <span className={styles.price}> &#8377; {props.product.special_price}
                            {(props.product.price != props.product.special_price) ? <span className={styles.oldPrice}>{props.product.price}</span> : ' '
                            }
                            {(props.product.discount > 0) ? <span className={styles.discount}>({props.product.discount}% Off)</span> : ''
                            }
                        </span>
                        <Link href='#'><a className={styles.addtocart}><ATC /></a></Link>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Card