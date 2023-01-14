import React, {FC} from 'react'
import './ContentPage.scss'
import {Content} from "./Content/Content";
import {Helmet} from "react-helmet-async";

export interface ContentPageProps {

}

export const ContentPage: FC<ContentPageProps> = ({}) => {
    return (
        <div className="ContentPage">
            <Helmet>
                <title>Мотоцикли</title>
            </Helmet>
            <Content/>
        </div>
    )
}

