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
    variation: Variation[]
}

export type PostMotorcycle = {
    brand: string
    model: string
    price: number
    engineCapacity: number
    enginePower: number
    fuelConsumption: number
    fuelCapacity: number
    gears: number
    mass: number
}

export type Variation = {
    id: number
    idMotorcycle: number
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

export type CartElement = [number, number, number]

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
    id: number
    idMotorcycle: number
    text: string
    userName: string
}

export type User = {
    id: number
    login: string
    firstName: string
    lastName: string
    dateOfBirth: string
    role: 'admin' | 'user' | 'moderator'
}

export type PostUser = {
    login: string
    firstName: string
    lastName: string
    dateOfBirth: string
    role?: 'admin' | 'user' | ''
}

export type UsersResponse = {
    message: string
    jwt: string
}

export type DashboardData = {
    [key: string]: string
}