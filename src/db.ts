import axios, {AxiosResponse} from "axios"
import {Motorcycles} from './Types'

export const getMotorcycles = async () => {
    let data;
    await axios
        .get('http://localhost:8888/moto')
        .then((response: AxiosResponse<Motorcycles>) => data = response.data)
    return await data
}

export const addMotorcycle = async () => {
    let data = {
        'brand': 'Honda',
        'model': 'CBR 600RR',
        'price': 10000,
        'engineCapacity': 600,
        'enginePower': 100,
        'fuelConsumption': 5,
        'fuelCapacity': 15,
        'gears': 6,
        'mass': 200
    }
    let path = Object.entries(data).map(([key, val]) => `${key}=${val}`).join('&');
    await axios
        .post("http://localhost:8888/moto?", data)
        .then((response: AxiosResponse<Motorcycles>) => response.data)
}

export const deleteMotorcycle = async () => {}
export const updateMotorcycle = async () => {}
export const addVariation = async () => {}
export const deleteVariation = async () => {}
export const updateVariation = async () => {}


