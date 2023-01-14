import axios, {AxiosResponse} from "axios"
import {DatabaseActions} from "./db";
import {request} from "../enums/request";
import {UserActions} from "./user";

export class CommentActions extends DatabaseActions{
    private category = request.comments
    public getComments = async (idMotorcycle: number): Promise<any> => {
        let data;
        await axios
            .get(`${process.env.REACT_APP_HOST}${this.category}?idMotorcycle=${idMotorcycle}`)
            .then((response: AxiosResponse<any>) => data = response.data)
        return await data
    }

    public addComment = async (text: string, idMotorcycle: number): Promise<any> => {
        await axios
            .post(`${process.env.REACT_APP_HOST}${this.category}?idMotorcycle=${idMotorcycle}&text=${text}&jwt=${new UserActions().getCookie()}`)
    }
}



