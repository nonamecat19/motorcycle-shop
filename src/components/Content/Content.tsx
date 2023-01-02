import {FC, useState} from 'react'
import './Content.scss'
import {Notification} from "@c/Notification/Notification";
import {OrderList} from "@c/OrderList/OrderList";
import {Products} from "@c/Products/Products";
import {Sidebar} from "@c/Sidebar/Sidebar";
import Navbar from "@c/Navbar/Navbar";
import {ShoppingCart} from "@c/ShoppingCart/ShoppingCart";
import axios, {AxiosResponse} from "axios";
import {useDispatch, useSelector} from 'react-redux';
import {setMotorcycles} from "@slices/motorcyclesSlicer";
import {Motorcycles} from "@types";

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

