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
    cart: Cart
    setCart: Function
    motorcycles: Motorcycles
    setMotorcycles: Function
    cache: Cache
    getFullPrice: Function
    // notify: Notify
    // setNotify: Function
    notifyRef: any
    orders: Orders
    setOrders: Function
    setFiltered: Function
    cardsFilter: Function
    filterBrand: Ref<any>
    filterModel: Ref<any>
    filtered: any,
    // authForm: boolean
    // setAuthForm: Function
}

export const Content: FC<ContentProps> = ({cart, setCart, motorcycles, setMotorcycles, cache, getFullPrice, notifyRef, orders, setOrders, setFiltered, cardsFilter, filterBrand, filterModel, filtered}) => {
    return(
        <div className="Content">
            <Navbar
                cart={cart}
                getFullPrice={getFullPrice}
                // authForm={authForm}
                // setAuthForm={setAuthForm}
            />
            <div className='content'>
                <ShoppingCart
                    cart={cart}
                    setCart={setCart}
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                    cache={cache}
                    getFullPrice={getFullPrice}
                    notifyRef={notifyRef}
                    orders={orders}
                    setOrders={setOrders}
                />
                <Products
                    filtered={filtered}
                    cart={cart}
                    setCart={setCart}
                    cache={cache}
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                />
                <Sidebar
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                    cardsFilter={cardsFilter}
                    // resetFilter={resetFilter}
                />
                <AdminPanel
                    cache={cache}
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                    setFiltered={setFiltered}
                    cardsFilter={cardsFilter}
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                    filtered={filtered}
                />
                <Notification
                    notifyRef={notifyRef}
                />
                <OrderList
                    orders={orders}
                />

            </div>

        </div>
    )
}

