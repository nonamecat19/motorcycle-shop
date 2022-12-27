import {FC, useState} from 'react'
import './Content.scss'
import {AdminPanel} from "../AdminPanel/AdminPanel";
import {Notification} from "../Notification/Notification";
import {OrderList} from "../OrderList/OrderList";
import {Products} from "../Products/Products";
import {Sidebar} from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";

import axios, {AxiosResponse} from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {setMotorcycles} from "../../redux/slices/motorcyclesSlicer";
import {Motorcycles} from "../../Types";

export interface ContentProps {
}

export const Content: FC<ContentProps> = ({}) => {
    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch()
    const handleClick = () => {
        axios.get('http://localhost:8888/api/motorcycles/get').then(function (response: AxiosResponse<Motorcycles>) {
            console.log(response.data)
            // dispatch(setMotorcycles(response.data))
        })
    }
    return (
        <div className="Content">
            <button
                onClick={handleClick}
            >

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

