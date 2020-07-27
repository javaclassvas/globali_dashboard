import React from "react";
import styles from './/maincontainer.module.scss'
import PatientsTable from "../Tables/patients";

const MainContainer = () => {





    return (
        <>
            <div className={styles.cont}>
                <div className={styles.menu}>
                    <div>ACCOUNT</div>
                    <div>PATIENTS HUB</div>
                    <div>INFORMATION PROVIDER</div>
                    <div>INSURANCE</div>
                    <div>SUPPORT</div>
                    <div>ABOUT</div>
                    <div>TEAM</div>
                    <div>______________</div>
                    <div>LANGUAGE</div>
                    <div>SETTINGS</div>
                </div>
                <div className={styles.text}>
                    <PatientsTable/>
                </div>

            </div>
        </>
    )
}

export default MainContainer;