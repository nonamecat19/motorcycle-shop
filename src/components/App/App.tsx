import React, {useEffect, useRef, useState} from 'react';
import './App.scss';
import JSONData from '../../data.json'
import {Products} from "../Products/Products";
import {Sidebar} from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";
import {ShoppingCart} from "../ShoppingCart/ShoppingCart";
import {Cache, Motorcycles} from '../../Types'
import {AdminPanel} from "../AdminPanel/AdminPanel";

export const App = () => {
    let filterBrand: any = useRef()
    let filterModel: any = useRef()

    let localData = localStorage.getItem('motorcycles')
    let defaultMotoData: Motorcycles
    defaultMotoData = localData ? JSON.parse(localData) : JSONData.motorcycles;
    const [motorcycles, setMotorcycles] = useState(defaultMotoData)
    const [filtered, setFiltered] = useState(motorcycles)


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
        console.log(model, brand)
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


    return (
        <div className="App">
            <Navbar cart={cart} getFullPrice={getFullPrice}/>
            <div className='content'>
                <ShoppingCart
                    cart={cart}
                    setCart={setCart}
                    CardData={motorcycles}
                    cache={cache}
                    getFullPrice={getFullPrice}
                />
                <Products
                    filtered={filtered}
                    cart={cart}
                    setCart={setCart}
                    cache={cache}
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                />
                <Sidebar
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                    cardsFilter={cardsFilter}
                    // resetFilter={resetFilter}
                />
                <AdminPanel
                    cache={cache}
                    motorcycles={motorcycles}
                    setMotorcycles={setMotorcycles}
                    filtered={filtered}
                    setFiltered={setFiltered}
                    cardsFilter={cardsFilter}
                    filterBrand={filterBrand}
                    filterModel={filterModel}
                />
            </div>
        </div>
  );
}
