import React, {FC, Ref} from 'react'
import './ContentPage.scss'
import {Content} from "../../components/Content/Content";
import {Orders} from "../../Types";

export interface ContentPageProps {
    orders: Orders
    notifyRef: any
    setOrders: Function
    setFiltered: Function
    cardsFilter: Function
    filterBrand: Ref<any>
    filterModel: Ref<any>
    filtered: any
}

export const ContentPage: FC<ContentPageProps> = ({orders, notifyRef, setOrders, setFiltered, cardsFilter, filterBrand, filterModel, filtered}) => {
    return(
        <div className="ContentPage">
            <Content
                orders={orders}
                notifyRef={notifyRef}
                setOrders={setOrders}
                setFiltered={setFiltered}
                cardsFilter={cardsFilter}
                filterBrand={filterBrand}
                filterModel={filterModel}
                filtered={filtered}
            />
        </div>
    )
}

