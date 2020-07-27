import React, {useContext} from "react";
import {Redirect, Route} from "react-router";
import Login from "../Login/login";
import MainContainer from "../Container/MainContainer";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {TUser} from "../../Types/user";
import {DashBoardContext} from "../App/dashboard-context-provider";


const DashboardRouter = (): React.ReactElement => {

    const { user: { id: userId } = {} as TUser } = useContext(DashBoardContext);

    console.log(userId)

    if (!userId) {
        return (
            <>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Redirect to="/login" />
            </>
        );
    }
    return (
        <Route exact path="/">
            <Header/>
            <MainContainer/>
            <Footer/>
        </Route>
    );
};

export default DashboardRouter;




