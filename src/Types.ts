import {Ref} from "react";

export type MotorcycleElement = {
    "id": number,
    "img": string,
    "brand": string,
    "model":string,
    "price": number,
    "number": number,
    "color": string
}

export type Motorcycles = MotorcycleElement[]

export type Cache = {
    [key: string]: string
}

export type Notify = {
    "header": string
    "text": string
    "ref": Ref<any>
}

export type Cart = number[]

export type OrderElement = {
    "number": number
    "products": Motorcycles
    "totalPrice": number
    "rating": number
    "comment": string
}

export type Orders = OrderElement[]