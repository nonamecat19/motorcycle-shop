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
    notifyRef: Ref<any>
    filterBrand: Ref<any>
    filterModel: Ref<any>
}

export const Content: FC<ContentProps> = ({notifyRef, filterBrand, filterModel}) => {
    let {motorcycles, filtered, cart} = useSelector((state: any) => state.motorcycles)
    const getFullPrice = () => {
        let sum: number = 0
        for (let product of cart)
            sum += motorcycles[product].price
        return sum.toString()
    }

    return (
        <div className="Content">
            <Navbar
                getFullPrice={getFullPrice}
            />
            <div className='content'>
                <ShoppingCart
                    getFullPrice={getFullPrice}
                    notifyRef={notifyRef}
                />
                <Products/>
                <Sidebar
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                />
                <AdminPanel/>
                <Notification
                    notifyRef={notifyRef}
                />
                <OrderList/>
            </div>
        </div>
    )
}

