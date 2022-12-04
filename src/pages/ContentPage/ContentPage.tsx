import React, {FC, Ref} from 'react'
import './ContentPage.scss'
import {Content} from "../../components/Content/Content";

export interface ContentPageProps {
    notifyRef: Ref<any>
    filterBrand: Ref<any>
    filterModel: Ref<any>
}

export const ContentPage: FC<ContentPageProps> = ({notifyRef, filterBrand, filterModel}) => {
    return(
        <div className="ContentPage">
            <Content
                notifyRef={notifyRef}
                filterBrand={filterBrand}
                filterModel={filterModel}
            />
        </div>
    )
}

