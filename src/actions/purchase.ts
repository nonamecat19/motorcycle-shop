import axios, {AxiosResponse} from "axios"
import {DatabaseActions} from "./db";
import {request} from "../enums/request";

export class PurchaseActions extends DatabaseActions{
    private category = request.purchase
    public buy = async (data: string) => {
        let res;
        await axios
            .post(`${process.env.REACT_APP_HOST}${this.category}?data=${data}`)
            .then((response: AxiosResponse<string>) => res = response.data)
        return await res
    }
}



