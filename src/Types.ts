export type MotorcycleElement = {
    "id": number,
    "img": string,
    "brand": string,
    "model":string,
    "price": number,
    "available": boolean,
    "color": string
}

export type Motorcycles = Array<MotorcycleElement>

export type Cache = {
    [key: string]: string
}
