import React from "react";
import styles from './/header.module.scss';
import logo from '../../Assets/logo.png';

const Header = () => {

    return(
        <div className={styles.cont}>
            <img className={styles.logo} src={logo} alt={logo}/>
            <div className={styles.name}>
                GLOBALI
            </div>
        </div>
    );

}

export default Header;