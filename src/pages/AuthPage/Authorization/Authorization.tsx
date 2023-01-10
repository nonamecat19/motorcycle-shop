import React, {FC, useEffect} from 'react'
import './Authorization.scss'
import Spline from "@splinetool/react-spline";
import {AuthorizationLogin} from "./AuthorizationLogin/AuthorizationLogin";
import {Preloader} from "../../../components/Preloader/Preloader";

export interface AuthorizationProps {

}

export const Authorization: FC<AuthorizationProps> = () => {
    const [loading, setLoading] = React.useState<boolean>(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 500)
    }, [])
    return (
        <div className="Authorization flex justify-center items-center">
            {loading && <Preloader/>}
            <div className="absolute h-full w-screen">
                <Spline scene="https://prod.spline.design/zM-G45PW36d4Cj84/scene.splinecode"/>
            </div>
            <AuthorizationLogin/>
        </div>
    )
}

