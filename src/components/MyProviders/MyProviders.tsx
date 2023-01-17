import React, {FC} from 'react'
import './MyProviders.scss'
import {Provider} from "react-redux";
import {store} from "../../redux/store";
import {IconContext} from "react-icons/lib";
import {BrowserRouter} from "react-router-dom";
import {GoogleOAuthProvider} from "@react-oauth/google";
import {ContextStore} from "../ContextStore/ContextStore"
import {HelmetProvider} from 'react-helmet-async'

export interface MyProvidersProps {
    children: JSX.Element
}

const ClientId = "1006000475336-gfsn0elvjquo919ufdeea4v5he3mm5q0.apps.googleusercontent.com"

const iconsSettings = {
    color: "#ff8800",
    verticalAlign: "middle",
    size: "1.5em",
    style: {
        display: 'inline',
        marginRight: '7px'
    }
}

export const MyProviders: FC<MyProvidersProps> = ({children}) => {
    return (
        <Provider store={store}>
            <IconContext.Provider value={iconsSettings}>
                <BrowserRouter>
                    <ContextStore>
                        <GoogleOAuthProvider clientId={ClientId}>
                            <HelmetProvider>
                                {children}
                            </HelmetProvider>
                        </GoogleOAuthProvider>
                    </ContextStore>
                </BrowserRouter>
            </IconContext.Provider>
        </Provider>
    )
}

