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
import {useSelector} from "react-redux";

export interface ContentProps {
    motorcycles: Motorcycles
    setMotorcycles: Function
    notifyRef: any
    orders: Orders
    setOrders: Function
    setFiltered: Function
    cardsFilter: Function
    filterBrand: Ref<any>
    filterModel: Ref<any>
    filtered: any
}

export const Content: FC<ContentProps> = ({motorcycles, setMotorcycles, notifyRef, orders, setOrders, setFiltered, cardsFilter, filterBrand, filterModel, filtered}) => {
    const {cart} = useSelector((state: any) => state.cart)
    const getFullPrice = () => {
        let sum: number = 0
        for (let product of cart)
            sum += motorcycles[product].price
        return sum.toString()
    }

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
                    notifyRef={notifyRef}
                />
                <OrderList
                    orders={orders}
                />

            </div>

        </div>
    )
}

