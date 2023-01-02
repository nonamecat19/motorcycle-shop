import React, {FC} from 'react'
import './Authorization.scss'
import Spline from "@splinetool/react-spline";
import {AuthorizationLogin} from "@c/AuthorizationLogin/AuthorizationLogin";

export interface AuthorizationProps {

}

export const Authorization: FC<AuthorizationProps> = () => {
    return (
        <div className="Authorization flex justify-center items-center">
            <div className="absolute h-full w-screen">
                <Spline scene="https://prod.spline.design/zM-G45PW36d4Cj84/scene.splinecode"/>
            </div>
            <AuthorizationLogin/>
        </div>
    )
}

