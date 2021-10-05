import React from "react";
import {NavLink} from "react-router-dom";


export const PATH = {
    LOGIN: '/',
    REGISTRATION: '/registration',
    PROFILE: '/profile',
    ERROR404: '/error404',
    PASSWORD_CREATE: '/createPassword',
    PASSWORD_ENTER: '/enterPassword',
    TEST_COMPONENTS: '/testSuperComponents',
}

export const Header: React.FC = () => {
    return (<div>
        <div>
            <NavLink to={PATH.LOGIN}>Login</NavLink>
        </div>
        <div>
            <NavLink to={PATH.REGISTRATION}>Registration</NavLink>
        </div>
        <div>
            <NavLink to={PATH.PROFILE}>Profile</NavLink>
        </div>
        <div>
            <NavLink to={PATH.ERROR404}>Error 404</NavLink>
        </div>
        <div>
            <NavLink to={PATH.PASSWORD_CREATE}>Create new password</NavLink>
        </div>
        <div>
            <NavLink to={PATH.PASSWORD_ENTER}>Enter new password</NavLink>
        </div>
        <div>
            <NavLink to={PATH.TEST_COMPONENTS}>Test</NavLink>
        </div>
    </div>)
}