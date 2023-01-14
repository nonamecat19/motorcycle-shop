import React, {FC} from 'react'
import './AuthPage.scss'
import {Authorization} from "./Authorization/Authorization";
import {Helmet} from "react-helmet-async";

export interface AuthPageProps {

}

export const AuthPage: FC<AuthPageProps> = ({}) => {
    return (
        <div className="AuthPage">
            <Helmet>
                <title>Авторизація</title>
            </Helmet>
            <Authorization/>
        </div>
    )
}

