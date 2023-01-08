import axios, {AxiosResponse} from "axios"
import {MotorcycleElement, Motorcycles, PostMotorcycle, PostUser} from '../Types'
import {parametrizedAxios} from "./db";
import {request} from "../enums/request";


const category = request.motorcycles
export const getMotorcycles = async (params?: PostMotorcycle) => {
    let data;
    await axios
        .get(`${process.env.REACT_APP_HOST}${category}?`)
        .then((response: AxiosResponse<Motorcycles>) => data = response.data)
    return await data
}

export const addMotorcycle = async (params: MotorcycleElement) => {
    let path = parametrizedAxios(params)
    await axios
        .post(`${process.env.REACT_APP_HOST}${category}?${path}`)
}

export const deleteMotorcycle = async (id: number) => {
    await axios
        .delete(`${process.env.REACT_APP_HOST}${category}?id=${id}`)
}
export const updateMotorcycle = async () => {}


