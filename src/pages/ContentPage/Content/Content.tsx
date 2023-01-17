import {FC, useState} from 'react'
import './Content.scss'
import {Notification} from "../../../components/Notification/Notification";
import {OrderList} from '../../../components/OrderList/OrderList'
import {Products} from "../Products/Products";
import {Sidebar} from "../Sidebar/Sidebar";
import Navbar from "../../../components/Navbar/Navbar";
import {ShoppingCart} from "../../../components/ShoppingCart/ShoppingCart";

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
                <Notification/>
                <OrderList/>
            </div>
        </div>
    )
}

