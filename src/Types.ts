import React from "react"

export type MotorcycleElement = {
    id: number
    model: string
    brand: string
    price: number
    engineCapacity: number
    enginePower: number
    fuelConsumption: number
    fuelCapacity: number
    gears: number
    mass: number
    variations: Variation[]
}

export type Variation = {
    id: number
    colorName: string
    colorHex: string
    colorHex2: string
    available: number
    photo: string
}

export type Motorcycles = MotorcycleElement[]

export type Cache = {
    [key: string]: string
}

export type Notify = {
    header: string
    text: string
}

export type Cart = CartElement[]

export type CartElement = [number, number]

export type OrderElement = {
    number: number
    products: MotorcyclesWithNumber
    totalPrice: number
    rating: number
    comment: string
}

export type MotorcyclesWithNumber = MotoWithNumber[]

export type MotoWithNumber = [MotorcycleElement, number]

export type Orders = OrderElement[]

export interface ContextStoreType {
    notifyRef?: React.RefObject<HTMLInputElement> | null
    filterBrand?: React.RefObject<HTMLSelectElement> | null
    filterModel?: React.RefObject<HTMLInputElement> | null
}

export type Comments =  CommentsMoto[]

export type CommentsMoto = {
    productId: number
    data: CommentElement[]

}

export type CommentElement = {
    userId: number
    comment: string
}

export type User = {
    id: number
    first_name: string
    last_name: string
    role: 'admin' | 'user' | ''
}

export type UsersResponse = User | boolean

export type DashboardData = {
    [key: string]: string
}