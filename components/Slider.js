import SliderIconData, { AllBag } from '../dummy/dummyData'
import styles from '../styles/Slider.module.css'

const Slider = () => {
    return (
        <div className={styles.scrollmenuContainer}>
            <div className={styles.allbagIconContainer}>
                <div className={styles.icon}>{AllBag.icon}</div>
                <div><a className={styles.iconName} href='#tools'>{AllBag.iconName}</a></div>
            </div>
            {
                SliderIconData.map((item) => {
                    return (
                        <div className={styles.iconContainer}>
                            <div className={styles.icon} >{item.icon}</div>
                            <div><a className={styles.iconName} href='#tools'>{item.iconName}</a></div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Slider