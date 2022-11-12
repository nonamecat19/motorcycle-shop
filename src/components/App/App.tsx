import React, {useEffect, useRef, useState} from 'react';
import './App.scss';
import JSONData from '../../data.json'
import {Cache, Motorcycles, Orders} from '../../Types'
import {Authorization} from "../Authorization/Authorization";
import {Content} from "../Content/Content";
import {useDispatch, useSelector} from "react-redux";

export const App = () => {
    // const [authForm, setAuthForm] = useState(false)

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

    let Stored = localStorage.getItem('cart')


    let fromLocalStorage = Stored ? JSON.parse(Stored) : []
    const [cart, setCart] = useState(fromLocalStorage)

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    const resetFilter = () => setFiltered(motorcycles)
    const cardsFilter = (model: string, brand: string) => {
        let data = brand === 'All' ? motorcycles : motorcycles.filter((item: any) => item.brand.includes(brand))
        setFiltered(data.filter((item: any) => item.model.toLowerCase().includes(model.toLowerCase())))
    }

    const cache: Cache = {};
    const importAll = (r: any): void => r.keys().forEach((key: string) => (cache[key] = r(key)));
    importAll(require.context('../../assets/motorcycle/', true, /\.(png|ico|svg|jpg|gif)$/))

    const getFullPrice = () => {
        let sum: number = 0
            for (let product of cart)
                    sum += motorcycles[product].price
        return sum.toString()
    }

    const [notify, setNotify] = useState(
        {
            header: "",
            text: ""
        }
    )
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
            {
                authForm
                ?
                <Authorization/>
                :
                <Content
                    cart={cart}
                    setCart={setCart}
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                    cache={cache}
                    getFullPrice={getFullPrice}
                    notify={notify}
                    setNotify={setNotify}
                    notifyRef={notifyRef}
                    orders={orders}
                    setOrders={setOrders}
                    setFiltered={setFiltered}
                    cardsFilter={cardsFilter}
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                    filtered={filtered}
                />
            }


        </div>
  )
}
