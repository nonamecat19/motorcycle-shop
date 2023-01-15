import axios, {AxiosResponse} from "axios"
import {DatabaseActions} from "./db";
import {request} from "../enums/request";
import {UserActions} from "./user";

export class PurchaseActions extends DatabaseActions{
    private category = request.purchase
    public buy = async (data: string, fullPrice: number, shopNum: number) => {
        let res;
        await axios
            .post(`${process.env.REACT_APP_HOST}${this.category}?data=${data}&fullPrice=${fullPrice}&shopNum=${shopNum}&jwt=${new UserActions().getCookie()}`)
            .then((response: AxiosResponse<string>) => res = response.data)
        return await res
    }

    public getList = async () => {

    }
}