import React, {FC, useRef} from 'react'
import './ProductPage.scss'
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import {AdminPanel} from '../../components/AdminPanel/AdminPanel';
import {Notification} from '../../components/Notification/Notification';
import {WhiteContent} from '../../components/WhiteContent/WhiteContent';
import {setCart} from "../../redux/slices/motorcyclesSlicer";
import {ShoppingCart} from '../../components/ShoppingCart/ShoppingCart';
import {CommentElement, Comments, CommentsMoto} from "../../Types";
import {setComments} from '../../redux/slices/commentsSlicer';
import {nanoid} from "@reduxjs/toolkit";

export interface ProductPageProps {

}

export const ProductPage: FC<ProductPageProps> = ({}) => {
    let id: number = -1
    const commentRef = useRef<HTMLTextAreaElement>(null)
    const pageId = useParams<{ id: string }>().id;
    if (typeof pageId !== 'undefined') {
        id = parseInt(pageId)
    } else {
        console.error('Виникла помилка при отриманні id')
    }
    const dispatch = useDispatch()
    const comment: Comments = useSelector((state: any) => state.comments.comments)
    let myComment = comment ? JSON.parse(JSON.stringify(comment)) : []
    let thisMotoComment = myComment.find(({productId, data}: CommentsMoto) => {
        return productId === id
    })
    const addToCart = (e: any): void => {
        dispatch(setCart([...cart, [id, 1]]))
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

    const CommentHandler = (e: any): void => {
        e.preventDefault()

        if (typeof thisMotoComment === 'undefined') {
            myComment.push({
                productId: id,
                data: [
                    {
                        userId: 1,
                        comment: commentRef.current?.value,
                    }
                ]
            })
        } else {
            thisMotoComment.data.push({
                userId: 1,
                comment: commentRef.current?.value,
            })
        }
        dispatch(setComments(myComment))
    }

    const {motorcycles, cart} = useSelector((state: any) => state.motorcycles)
    const {cache} = useSelector((state: any) => state.cache)
    const {brand, model, color, price} = motorcycles[id]

    const exampleDetails = [
        ["Колір", color],
        ['Макс. швидкість', '250 км/год'],
        ['К-сть передач', '6'],
        ['0-100 км/год', '3.5 сек'],
        ['Масса', '200 кг'],
        ['Об\'єм двигуна', '1000 см³'],
        ['Потужність', '200 к.с.'],
        ['Паливний бак', '20 л'],
        ['Габарити', '2000x1000x1000 мм']
    ]

    const comments = () => {
        return (
            thisMotoComment && thisMotoComment.data
                ?
                thisMotoComment.data.map(({userId, comment}: CommentElement) => {
                    return (
                        <div key={nanoid(8)}>
                            <div className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img src="https://placeimg.com/192/192/people"/>
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Петро
                                </div>
                                <div className="chat-bubble">
                                    {comment}
                                </div>
                            </div>
                        </div>
                    )
                })
                :
                <h1 className='text-second'>Коментарів немає. Можливо ваш стане першим?</h1>
        )
    }

    return (
        <div className="ProductPage">
            <Navbar/>
            <Link to='/'>
                <img
                    src={cache['./close.png']}
                    alt=""
                    className="absolute top-20 left-8 h-16"
                />
            </Link>
            <div className="h-10"></div>

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
                        {
                            exampleDetails.map(([title, content]): JSX.Element => (
                                <WhiteContent
                                    key={title}
                                    title={title}
                                    content={content}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="ProductComments">
                <div className="CommentsList">
                    <h1>Коментарі</h1>
                    {comments()}
                </div>
                <div className="FeedbackForm">
                    <h1>Залишити відгук</h1>
                    <textarea
                        className="textarea textarea-bordered"
                        placeholder="Ваш коментар"
                        ref={commentRef}
                    ></textarea>
                    <button
                        className="btn"
                        onClick={CommentHandler}
                    >
                        Відправити
                    </button>
                </div>

            </div>
            <ShoppingCart/>
            <Notification/>
            <AdminPanel/>
        </div>
    )
}

