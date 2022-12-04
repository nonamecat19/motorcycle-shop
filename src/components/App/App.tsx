import React, {Ref, useEffect, useRef, useState} from 'react';
import './App.scss';
import JSONData from '../../data.json'
import {Cache, Motorcycles, Orders} from '../../Types'
import {Authorization} from "../Authorization/Authorization";
import {Content} from "../Content/Content";
import {useDispatch, useSelector} from "react-redux";
import {Router, Route, Routes} from "react-router-dom";
import {AuthPage} from "../../pages/AuthPage/AuthPage";
import {ContentPage} from "../../pages/ContentPage/ContentPage";
import {ProductPage} from "../../pages/ProductPage/ProductPage";
import {setFiltered} from '../../redux/slices/motorcyclesSlicer';

export const App = () => {
    const filterBrand: Ref<any> = useRef()
    const filterModel: Ref<any> = useRef()
    const notifyRef: Ref<any> = useRef()

    const dispatch = useDispatch()

    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<ContentPage
                    notifyRef={notifyRef}
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                />}/>
                <Route path='auth' element={<AuthPage/>}/>
                <Route path='products/:category/:id' element={<ProductPage/>}/>
            </Routes>
        </div>
    )
}

