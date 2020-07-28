import React, {useContext} from "react";
import styles from './/header.module.scss';
import logo from '../../Assets/logo.png';
import {DashBoardContext} from "../App/dashboard-context-provider";
import {LogOut} from "react-feather";


const Header = () => {

    const {logout} = useContext(DashBoardContext);

    return (
        <div className={styles.cont}>
            <div className={styles.logoTitle}>
                <img className={styles.logo} src={logo} alt={logo}/>
                <div className={styles.name} onClick={logout}>
                    GLOBALI
                </div>
            </div>
            <div className={styles.logout} onClick={logout}>
               LOGOUT<LogOut/>
            </div>
        </div>
    );

}

export default Header;