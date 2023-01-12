import React, {FC, useEffect, useRef, useState} from 'react'
import './ProductPage.scss'
import {Link, useNavigate, useParams} from "react-router-dom"
import {useDispatch, useSelector} from 'react-redux'
import {MotorcycleElement} from "../../Types";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";
import {ProductContent} from "./ProductContent/ProductContent";

export interface ProductPageProps {

}

export const ProductPage: FC<ProductPageProps> = ({}) => {
    const {motorcycles} = useSelector((state: any) => state.motorcycles)
    let pageId = useParams<{ id: string }>().id;
    if (!pageId)
        pageId = '-1'
    let currentMoto = motorcycles.find(({id}: MotorcycleElement) => id ===  parseInt(pageId as string))
    return (
        <>
            {
                (currentMoto?.variation?.length > 0) ?
                    <ProductContent
                        currentMoto={currentMoto}
                        pageId={pageId}
                        motorcycles={motorcycles}
                    />
                    :
                    <NotFoundPage/>
            }
        </>
    )
}
