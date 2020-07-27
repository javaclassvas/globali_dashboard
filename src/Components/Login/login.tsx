import React, {useContext} from "react";
import {Button} from "react-bootstrap";
import {useHistory} from "react-router";
import {DashBoardContext} from "../App/dashboard-context-provider";




const Login = () : React.ReactElement => {

    const { login } = useContext(DashBoardContext);


    const { push } = useHistory();

    const handleSubmit = async () => {
        await login("TEST NAME");
        push("/");
        return false;
    }

    return (
        <div>
            <Button onClick={handleSubmit}>CLICK ME</Button>
        </div>
    )
}



export default Login;
