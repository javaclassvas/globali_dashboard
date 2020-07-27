import React from 'react';
import "./app.module.scss";
import {BrowserRouter, Switch} from "react-router-dom";
import DashboardRouter from "../DashboardRouter/dashboardRouter";
import {DashBoardContextProvider} from "./dashboard-context-provider";

function App() {
    return (
        <>
            <BrowserRouter>
                <DashBoardContextProvider>
                    <Switch>
                        <DashboardRouter/>
                    </Switch>
                </DashBoardContextProvider>
            </BrowserRouter>
        </>
    );
}

export default App;
