import React, {FC, Ref} from 'react'
import './ContentPage.scss'
import {Content} from "../../components/Content/Content";

export interface ContentPageProps {
    notifyRef: any
    setFiltered: Function
    cardsFilter: Function
    filterBrand: Ref<any>
    filterModel: Ref<any>
    filtered: any
}

export const ContentPage: FC<ContentPageProps> = ({notifyRef, setFiltered, cardsFilter, filterBrand, filterModel, filtered}) => {
    return(
        <div className="ContentPage">
            <Content
                notifyRef={notifyRef}
                setFiltered={setFiltered}
                cardsFilter={cardsFilter}
                filterBrand={filterBrand}
                filterModel={filterModel}
                filtered={filtered}
            />
        </div>
    )
}

