import axios, {AxiosResponse} from "axios"
import {DatabaseActions} from "./db";
import {request} from "../enums/request";
export class StatsActions extends DatabaseActions{
    private category = request.stats
    public getStats = async (): Promise<any> => {
        let data;
        await axios
            .get(`${process.env.REACT_APP_HOST}${this.category}`)
            .then((response: AxiosResponse<any>) => data = response.data)
        return await data
    }
}



