import axios, {AxiosResponse} from "axios";
import {Motorcycles, PostUser} from "../Types";
import {DatabaseActions} from "./db";
import {request} from "../enums/request";

export class UserActions extends DatabaseActions {
    private category = request.users
    public getUsers = async (params?: any) => {
        let data;
        await axios
            .get(`${process.env.REACT_APP_HOST}${this.category}?`)
            .then((response: AxiosResponse<Motorcycles>) => data = response.data)
        return await data
    }
    public addUser = async (params: PostUser) => {
        let path = this.parametrizedAxios(params)
        await axios
            .post(`${process.env.REACT_APP_HOST}${this.category}${path}`)
    }
    public deleteUser = async (id: number) => {
        await axios
            .delete(`${process.env.REACT_APP_HOST}${this.category}?id=${id}`)
    }
}