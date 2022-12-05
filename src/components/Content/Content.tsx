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
}

export const Content: FC<ContentProps> = ({}) => {
    return (
        <div className="Content">
            <Navbar/>
            <div className='content'>
                <ShoppingCart/>
                <Products/>
                <Sidebar/>
                <AdminPanel/>
                <Notification/>
                <OrderList/>
            </div>
        </div>
    )
}

