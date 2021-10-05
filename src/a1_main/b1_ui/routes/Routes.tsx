import React from "react";
import {PATH} from "../header/Header";
import {Route} from "react-router-dom";
import {Login} from "../components/Login/Login";
import {Profile} from "../components/Profile/Profile";
import {Error404} from "../components/Error404/Error404";
import {PasswordCreate} from "../components/PasswordCreate/PasswordCreate";
import {TestComponents} from "../components/TestComponents/TestComponents";
import {PasswordEnter} from "../components/PasswordEnter/PasswordEnter";


export const Routes: React.FC = () => {
    return (
        <div>
            <Route path={PATH.LOGIN} exact render={() => <Login/>}/>
            <Route path={PATH.PROFILE} render={() => <Profile/>}/>
            <Route path={PATH.ERROR404} render={() => <Error404/>}/>
            <Route path={PATH.PASSWORD_CREATE} render={() => <PasswordCreate/>}/>
            <Route path={PATH.PASSWORD_ENTER} render={() => <PasswordEnter/>}/>
            <Route path={PATH.TEST_COMPONENTS} render={() => <TestComponents/>}/>
        </div>
    )
}