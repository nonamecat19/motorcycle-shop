import {FC, useState} from 'react'
import './Content.scss'
import {Notification} from "../Notification/Notification";
import {OrderList} from "../OrderList/OrderList";
import {Products} from "../Products/Products";
import {Sidebar} from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";
import axios, {AxiosResponse} from "axios";
import {useDispatch} from 'react-redux';
import {Motorcycles} from "../../Types";
import {addMotorcycle} from "../../db";

export interface ContentProps {
}

export const Content: FC<ContentProps> = ({}) => {
    const handleClick = () => {
        addMotorcycle()
    }
    return (
        <div className="Content">
            <button
                onClick={handleClick}
            >
                asdfsadfasdf
            </button>
            <Navbar/>
            <div className='content'>
                <ShoppingCart/>
                <Products/>
                <Sidebar/>
                {/*<AdminPanel/>*/}
                <Notification/>
                <OrderList/>
            </div>
        </div>
    )
}

