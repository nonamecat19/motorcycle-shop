import {FC, useState} from 'react'
import './Content.scss'
import {AdminPanel} from "../AdminPanel/AdminPanel";
import {Notification} from "../Notification/Notification";
import {OrderList} from "../OrderList/OrderList";
import {Products} from "../Products/Products";
import {Sidebar} from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";

import axios from "axios";

export interface ContentProps {
}

export const Content: FC<ContentProps> = ({}) => {
    const [inputs, setInputs] = useState({})
    const handleClick = () => {
        console.log('click')
        // axios.post('http://localhost:8888/api/user/save', inputs).then(function (response) {
        //     console.log(response.data)
        // })
        axios.get('http://localhost:8888/api/user/get').then(function (response) {
            console.log(response.data)
        })
    }

    return (
        <div className="Content">
            <button
                onClick={handleClick}
            >
                asdflkjasdfklskladjf
            </button>
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

