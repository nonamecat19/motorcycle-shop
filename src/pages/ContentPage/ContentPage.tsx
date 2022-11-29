import React, {FC, Ref} from 'react'
import './ContentPage.scss'
import {Content} from "../../components/Content/Content";
import {Cache, Cart, Motorcycles, Notify, Orders} from "../../Types";

export interface ContentPageProps {
    cart: Cart
    setCart: Function
    motorcycles: Motorcycles
    setMotorcycles: Function
    cache: Cache
    getFullPrice: Function
    notify: Notify
    setNotify: Function
    notifyRef: any
    orders: Orders
    setOrders: Function
    setFiltered: Function
    cardsFilter: Function
    filterBrand: Ref<any>
    filterModel: Ref<any>
    filtered: any
}

export const ContentPage: FC<ContentPageProps> = ({cart, setCart, motorcycles, setMotorcycles, cache, getFullPrice, notify, setNotify, notifyRef, orders, setOrders, setFiltered, cardsFilter, filterBrand, filterModel, filtered}) => {
    return(
        <div className="ContentPage">
            <Content
                cart={cart}
                setCart={setCart}
                motorcycles={motorcycles}
                setMotorcycles={setMotorcycles}
                cache={cache}
                getFullPrice={getFullPrice}
                notify={notify}
                setNotify={setNotify}
                notifyRef={notifyRef}
                orders={orders}
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
