import React, {useEffect, useRef, useState} from 'react';
import './App.scss';
import JSONData from '../../data.json'
import {Cache, Motorcycles, Orders} from '../../Types'
import {Authorization} from "../Authorization/Authorization";
import {Content} from "../Content/Content";
import {useSelector} from "react-redux";
import {Router, Route, Link, Routes} from "react-router-dom";
import {AuthPage} from "../../pages/AuthPage/AuthPage";
import {ContentPage} from "../../pages/ContentPage/ContentPage";
import {ProductPage} from "../../pages/ProductPage/ProductPage";

export const App = () => {
    let filterBrand: any = useRef()
    let filterModel: any = useRef()

    let localData = localStorage.getItem('motorcycles')
    let defaultMotoData: Motorcycles
    defaultMotoData = localData ? JSON.parse(localData) : JSONData.motorcycles;
    const [motorcycles, setMotorcycles] = useState(defaultMotoData)
    const [filtered, setFiltered] = useState(motorcycles)
    // const filtered = useSelector(state => state.productFilter.filter)

    useEffect(() => {
        localStorage.setItem('motorcycles', JSON.stringify(motorcycles))
    }, [motorcycles])

    const resetFilter = () => setFiltered(motorcycles)
    const cardsFilter = (model: string, brand: string) => {
        let data = brand === 'All' ? motorcycles : motorcycles.filter((item: any) => item.brand.includes(brand))
        setFiltered(data.filter((item: any) => item.model.toLowerCase().includes(model.toLowerCase())))
    }

    const notifyRef = useRef()


    let localOrders = localStorage.getItem('orders')
    let defaultOrders: Orders = localOrders ? JSON.parse(localOrders) : [];
    const [orders, setOrders] = useState(defaultOrders)

    useEffect(() => {
        localStorage.setItem('orders', JSON.stringify(orders))
    }, [orders])

    const authForm = useSelector((state: any) => state.authForm.auth)

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<ContentPage
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                    orders={orders}
                    notifyRef={notifyRef}
                    setOrders={setOrders}
                    setFiltered={setFiltered}
                    cardsFilter={cardsFilter}
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                    filtered={filtered}
                />}/>
                <Route path='auth' element={<AuthPage/>}/>
                <Route path='products/:id' element={<ProductPage/>}/>
            </Routes>
        </div>
    )
}
