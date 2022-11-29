import React, {FC, Ref} from 'react'
import './Content.scss'
import {AdminPanel} from "../AdminPanel/AdminPanel";
import {Notification} from "../Notification/Notification";
import {OrderList} from "../OrderList/OrderList";
import {Products} from "../Products/Products";
import {Sidebar} from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";
import {Cache, Cart, Motorcycles, Notify, Orders} from "../../Types";

export interface ContentProps {
    motorcycles: Motorcycles
    setMotorcycles: Function
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

export const Content: FC<ContentProps> = ({motorcycles, setMotorcycles, getFullPrice, notify, setNotify, notifyRef, orders, setOrders, setFiltered, cardsFilter, filterBrand, filterModel, filtered}) => {
    return(
        <div className="Content">
            <Navbar
                getFullPrice={getFullPrice}
            />
            <div className='content'>
                <ShoppingCart
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                    getFullPrice={getFullPrice}
                    notify={notify}
                    setNotify={setNotify}
                    notifyRef={notifyRef}
                    orders={orders}
                    setOrders={setOrders}
                />
                <Products
                    filtered={filtered}
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                />
                <Sidebar
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                    cardsFilter={cardsFilter}
                />
                <AdminPanel
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                    setFiltered={setFiltered}
                    cardsFilter={cardsFilter}
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                    filtered={filtered}
                />
                <Notification
                    header={notify.header}
                    text={notify.text}
                    notifyRef={notifyRef}
                />
                <OrderList
                    orders={orders}
                />

            </div>

        </div>
    )
}

