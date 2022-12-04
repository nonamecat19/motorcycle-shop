import React, {FC, Ref} from 'react'
import './ContentPage.scss'
import {Content} from "../../components/Content/Content";

export interface ContentPageProps {
    notifyRef: any
    cardsFilter: Function
    filterBrand: Ref<any>
    filterModel: Ref<any>
}

export const ContentPage: FC<ContentPageProps> = ({notifyRef, cardsFilter, filterBrand, filterModel}) => {
    return(
        <div className="ContentPage">
            <Content
                notifyRef={notifyRef}
                cardsFilter={cardsFilter}
                filterBrand={filterBrand}
                filterModel={filterModel}
            />
        </div>
    )
}

