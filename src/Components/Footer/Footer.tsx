import React from 'react';
import styles from './/footer.module.scss';


const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.cont}>
                <div className={styles.left}>
                    <h2>LEFTSIDE</h2>
                </div>
                <div className={styles.center}>
                    <h2>CENTER</h2>
                </div>
                <div className={styles.right}>
                    <h2>RIGHTSIDE</h2>
                </div>
            </div>

        </div>
    )
}


export default Footer;