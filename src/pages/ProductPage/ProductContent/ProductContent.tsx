import React, {FC, useEffect, useRef, useState} from 'react'
import './ProductContent.scss'
import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Cart, CommentElement, Comments, CommentsMoto, MotorcycleElement} from "../../../Types";
import {setCart, updateFullPrice} from "../../../redux/slices/motorcyclesSlicer";
import {nanoid} from "@reduxjs/toolkit";
import Navbar from "../../../components/Navbar/Navbar";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";
import {WhiteContent} from "../../../components/WhiteContent/WhiteContent";
import {ShoppingCart} from "../../../components/ShoppingCart/ShoppingCart";
import {Notification} from "../../../components/Notification/Notification";

export interface ProductContentProps {
    motorcycles: MotorcycleElement[]
    currentMoto: MotorcycleElement
    pageId: string
}

export const ProductContent: FC<ProductContentProps> = ({motorcycles, currentMoto, pageId}) => {
    useEffect(() => {
        setVarNum(variation[0].id)
    })
    let motoId: number = -1
    let navigate = useNavigate()
    const {cart} = useSelector((state: any) => state.motorcycles)
    const commentRef = useRef<HTMLTextAreaElement>(null)
    if (typeof pageId !== 'undefined') {
        motoId = parseInt(pageId)
    } else {
        console.error('Виникла помилка при отриманні id')
    }
    const [varNum, setVarNum] = useState<number>(-1)
    const {cache} = useSelector((state: any) => state.cache)
    const dispatch = useDispatch()
    const comment: Comments = useSelector((state: any) => state.comments.comments)
    const [currentPhoto, setCurrentPhoto] = useState<string>('')
    let myComment = comment ? JSON.parse(JSON.stringify(comment)) : []

    let thisMotoComment = myComment.find(({productId, data}: CommentsMoto) => {
        return productId === motoId
    })

    const prevSlide = (): void => {
        setCurrentIndex(currentIndex === 0 ? variation.length - 1 : currentIndex - 1)
    }
    const [currentIndex, setCurrentIndex] = useState(0)
    const nextSlide = (): void => {
        setCurrentIndex(currentIndex === variation.length - 1 ? 0 : currentIndex + 1)
    }

    const goToSlide = (slideIndex: number): void => {
        setCurrentIndex(slideIndex)
    }

    const addToCart = (numVar: number): void => {
        if (variation[numVar].available < 1) {
            alert('Вибачте, але цього товару немає в наявності')
            return
        }

        let tempCart = JSON.parse(JSON.stringify(cart))
        tempCart.push([motoId, numVar, 1])
        dispatch(setCart(tempCart))
        dispatch(updateFullPrice())
    }

    const getAviability = (): boolean => {
        let flag = false
        cart.forEach(([productId, numVar, number]: any) => {
            if (productId === id && numVar === currentIndex)
                flag = true
        })
        return flag
    }

    // const CommentHandler = (e: any): void => {
    //     e.preventDefault()
    //
    //     if (typeof thisMotoComment === 'undefined') {
    //         myComment.push({
    //             // productId: id,
    //             data: [
    //                 {
    //                     userId: 1,
    //                     comment: commentRef.current?.value,
    //                 }
    //             ]
    //         })
    //     } else {
    //         thisMotoComment.data.push({
    //             userId: 1,
    //             comment: commentRef.current?.value,
    //         })
    //     }
    //     dispatch(setComments(myComment))
    // }



    if (typeof currentMoto.variation === 'undefined') {
        navigate('/')
    }
    if (typeof currentMoto === 'undefined') {
        currentMoto = {
            id: -1,
            model: '',
            brand: '',
            price: 0,
            engineCapacity: 0,
            enginePower: 0,
            fuelCapacity: 0,
            fuelConsumption: 0,
            gears: 0,
            mass: 0,
            // @ts-ignore
            variation: [{id: -1}],
        }
    }


    let {
        id,
        model,
        brand,
        price,
        engineCapacity,
        enginePower,
        fuelCapacity,
        fuelConsumption,
        gears,
        mass,
        variation
    } = currentMoto

    const exampleDetails = [
        ['Об\'єм двигуна', engineCapacity + 'см³'],
        ['Потужність', enginePower + 'л.с.'],
        ['Витрати палива', fuelConsumption + 'л/100км'],
        ['Паливний бак', fuelCapacity + 'л'],
        ['К-сть передач', gears],
        ['Масса', mass + 'кг'],
    ] as [string, string][]

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
                                        <img src="https://www.marketforce.com/hubfs/Icons/kf-user-round-orange.svg"/>
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
                <div className="ProductInfo">
                    <div className='flex'>
                        <div className={`h-[35vw] w-[60vw] relative group`}>
                            <div
                                style={{
                                    backgroundImage: `url(http://localhost:8888/data/${variation[currentIndex].photo})`,
                                    backgroundSize: '95%',
                                    backgroundRepeat: 'no-repeat',
                                }}
                                className='w-full h-full bg-center bg-cover duration-500'
                            />
                            <div
                                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-3 cursor-pointer'>
                                <BsChevronCompactLeft
                                    onClick={prevSlide}
                                    size={140}
                                    color={'#fff'}
                                />
                            </div>
                            <div
                                className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-3 cursor-pointer'>
                                <BsChevronCompactRight
                                    onClick={nextSlide}
                                    size={140}
                                    color={'#fff'}
                                />
                            </div>
                            <div className='flex justify-center -my-16'>
                                {variation.map((slide: any, slideIndex: any) => (
                                    <div
                                        key={slideIndex}
                                        onClick={() => goToSlide(slideIndex)}
                                        className='cursor-pointer text-3xl'
                                    >
                                        <RxDotFilled
                                            className={'duration-500 ' + (currentIndex === slideIndex ? 'scale-150' : '')}
                                            color={'#fff'}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-[35vw] max-w-[500px]'>
                            <h1>{brand}</h1>
                            <h2>{model}</h2>
                            <h2>{price}грн</h2>
                            <button
                                className="Product-btn"
                                onClick={() => addToCart(currentIndex)}
                                disabled={getAviability()}
                            >
                                {getAviability() ? 'В кошику' : 'Купити'}
                            </button>
                            <h2>{variation[currentIndex]?.colorName ?? ''}</h2>
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
                        // onClick={CommentHandler}
                    >
                        Відправити
                    </button>
                </div>

            </div>
            <ShoppingCart/>
            <Notification/>
        </div>
    )

}

