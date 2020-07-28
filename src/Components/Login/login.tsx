import React, {ChangeEvent, useCallback, useContext, useState} from "react";
import {useHistory} from "react-router";
import {DashBoardContext} from "../App/dashboard-context-provider";
import styles from "../Login/login.module.scss";
import {Button, Modal, Form} from "react-bootstrap";


const Login = (): React.ReactElement => {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const {login} = useContext(DashBoardContext);

    const {push} = useHistory();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await login(userName, password) ? push("/") : alert("INCORRECT CREDENTIALS")
        return false;
    };

    const handleChangeUserName = useCallback(
        ({target: {value}}: ChangeEvent<HTMLInputElement>) =>
            setUserName(value),
        []
    );

    const handleChangePassword = useCallback(
        ({target: {value}}: ChangeEvent<HTMLInputElement>) =>
            setPassword(value),
        []
    );


    return (
        <div className={styles.hero}>
            <div className={styles.cube}></div>
            <div className={styles.cube}></div>
            <div className={styles.cube}></div>
            <div className={styles.cube}></div>
            <div className={styles.cube}></div>
            <div className={styles.cube}></div>
            <Form onSubmit={handleSubmit}>
                <Modal.Dialog>
                    <Modal.Header className={styles.header}>
                        <Modal.Title>LOGIN TO GLOBALI</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form.Group className={styles.hospitalForm}>
                            <Form.Label className={styles.formLabel}>HOSPITAL</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Login"
                                required
                                value={userName}
                                onChange={handleChangeUserName}
                            />
                        </Form.Group>
                        <Form.Group className={styles.hospitalForm}>
                            <Form.Label className={styles.formLabel}>PASSWORD</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter password"
                                required
                                value={password}
                                onChange={handleChangePassword}
                            />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer className={styles.footer}>
                        <Button variant="primary" type="submit" className={styles.buttonLogin}>
                            ENTER TO NETWORK
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Form>
        </div>
    )
}


export default Login;
