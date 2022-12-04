import React, {useEffect, useRef, useState} from 'react';
import './App.scss';
import JSONData from '../../data.json'
import {Cache, Motorcycles, Orders} from '../../Types'
import {Authorization} from "../Authorization/Authorization";
import {Content} from "../Content/Content";
import {useDispatch, useSelector} from "react-redux";
import {Router, Route, Link, Routes} from "react-router-dom";
import {AuthPage} from "../../pages/AuthPage/AuthPage";
import {ContentPage} from "../../pages/ContentPage/ContentPage";
import {ProductPage} from "../../pages/ProductPage/ProductPage";
import { setFiltered } from '../../redux/slices/motorcyclesSlicer';

export const App = () => {
    let filterBrand: any = useRef()
    let filterModel: any = useRef()


    let {motorcycles} = useSelector((state: any) => state.motorcycles)
    const dispatch = useDispatch()

    // const filtered = useSelector(state => state.productFilter.filter)

    // const resetFilter = () => setFiltered(motorcycles)
    const cardsFilter = (model: string, brand: string) => {
        let data = brand === 'All' ? motorcycles : motorcycles.filter((item: any) => item.brand.includes(brand))
        dispatch(setFiltered(data.filter((item: any) => item.model.toLowerCase().includes(model.toLowerCase()))))
    }

    const notifyRef = useRef()


    const authForm = useSelector((state: any) => state.authForm.auth)

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<ContentPage
                    notifyRef={notifyRef}
                    cardsFilter={cardsFilter}
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                />}/>
                <Route path='auth' element={<AuthPage/>}/>
                <Route path='products/:category/:id' element={<ProductPage/>}/>
            </Routes>
        </div>
    )
}

