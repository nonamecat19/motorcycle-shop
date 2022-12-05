import React, {FC} from 'react'
import './ContentPage.scss'
import {Content} from "../../components/Content/Content";

export interface ContentPageProps {

}

export const ContentPage: FC<ContentPageProps> = ({}) => {
    return(
        <div className="ContentPage">
            <Content/>
        </div>
    )
}

