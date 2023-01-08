import axios, {AxiosResponse} from "axios";
import {Motorcycles, PostUser} from "../Types";
import {parametrizedAxios} from "./db";
import {request} from "../enums/request";


const category = request.users
export const getUsers = async (params?: any) => {
    let data;
    await axios
        .get(`${process.env.REACT_APP_HOST}${category}?`)
        .then((response: AxiosResponse<Motorcycles>) => data = response.data)
    return await data
}

export const addUser = async (params: PostUser) => {
    let path = parametrizedAxios(params)
    await axios
        .post(`${process.env.REACT_APP_HOST}${category}${path}`)
}

export const deleteUser = async (id: number) => {
    await axios
        .delete(`${process.env.REACT_APP_HOST}${category}?id=${id}`)
}