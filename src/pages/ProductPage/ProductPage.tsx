import React, {FC, useRef, useState} from 'react'
import './ProductPage.scss'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import {AdminPanel} from '../../components/AdminPanel/AdminPanel';
import {Notification} from '../../components/Notification/Notification';
import { WhiteContent } from '../../components/WhiteContent/WhiteContent';
import {setCart} from "../../redux/slices/motorcyclesSlicer";
import { ShoppingCart } from '../../components/ShoppingCart/ShoppingCart';

export interface ProductPageProps {

}

export const ProductPage: FC<ProductPageProps> = ({}) => {
    let id: number = -1
    const pageId = useParams<{ id: string }>().id;
    if (typeof pageId !== 'undefined') {
        id = parseInt(pageId)
    } else {
        console.error('Виникла помилка при отриманні id')
    }
    const dispatch = useDispatch()

    const addToCart = (e: any): void => {
        dispatch(setCart([...cart, [id, 1]]))
        console.log(cart)
        e.target.disabled = true
    }

    const getStatus = (): string => {
        if (motorcycles[id].number === 0)
            return 'Немає в наявності'
        for (let [productId] of cart)
            if (productId === id)
                return 'Вже в кошику'
        return 'Додати в кошик'
    }

    const getAviability = (): boolean => {
        if (motorcycles[id].number === 0)
            return true
        for (let [productId] of cart)
            if (productId === id)
                return true
        return false
    }

    const {motorcycles, cart} = useSelector((state: any) => state.motorcycles)
    const {cache} = useSelector((state: any) => state.cache)
    const {brand, model, color, price} = motorcycles[id]

    return (
        <div className="ProductPage">
            <Navbar/>
            <div className="h-20"></div>

            <div className="ProductContent">
                <img src={cache[`./${id}.png`]} alt=""/>
                <div className="ProductInfo">
                    <h1>{brand}</h1>
                    <h2>{model}</h2>
                    <h2>{price}$</h2>

                    <button
                        className="Product-btn"
                        onClick={addToCart}
                        disabled={getAviability()}
                    >
                        {getStatus()}
                    </button>
                    <div className="ProductBoxes">
                        <WhiteContent
                            title="Колір"
                            content={color}
                        />
                        <WhiteContent
                            title="Макс. швидкість"
                            content="300 км/год"
                        />
                        <WhiteContent
                            title="К-сть передач"
                            content="6"
                        />
                        <WhiteContent
                            title="0-100 км/год"
                            content="3.2 сек"
                        />
                        <WhiteContent
                            title="Масса"
                            content="200 кг"
                        />
                        <WhiteContent
                            title="Об'єм двигуна"
                            content="1000 см3"
                        />
                        <WhiteContent
                            title="Потужність"
                            content="200 к.с."
                        />
                        <WhiteContent
                            title="Паливний бак"
                            content="20 л"
                        />
                        <WhiteContent
                            title="Габарити"
                            content="2000x1000x1000 мм"
                        />
                    </div>
                </div>
            </div>
            <ShoppingCart/>
            <Notification/>
            <AdminPanel/>

        </div>
    )
}

