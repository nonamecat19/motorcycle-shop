import axios, {AxiosResponse} from "axios"
import {MotorcycleElement, Motorcycles, PostMotorcycle, PostUser} from '../Types'
import {DatabaseActions} from "./db";
import {request} from "../enums/request";
import {UserActions} from "./user";

export class MotorcycleActions extends DatabaseActions{
    private category = request.motorcycles
    public getMotorcycles = async (params?: PostMotorcycle): Promise<Motorcycles | undefined> => {
        let data;
        await axios
            .get(`${process.env.REACT_APP_HOST}${this.category}?`)
            .then((response: AxiosResponse<Motorcycles>) => data = response.data)
        return await data
    }

    public addMotorcycle = async (params: MotorcycleElement): Promise<void> => {
        let path = this.parametrizedAxios(params)
        await axios
            .post(`${process.env.REACT_APP_HOST}${this.category}?${path}&jwt=${new UserActions().getCookie()}`)
    }

    public deleteMotorcycle = async (id: number): Promise<void> => {
        await axios
            .delete(`${process.env.REACT_APP_HOST}${this.category}?id=${id}&jwt=${new UserActions().getCookie()}`)
    }
    public updateMotorcycle = async (params: MotorcycleElement): Promise<void>  => {
        let path = this.parametrizedAxios(params)
        await axios
            .put(`${process.env.REACT_APP_HOST}${this.category}?${path}&jwt=${new UserActions().getCookie()}`)
    }

}



