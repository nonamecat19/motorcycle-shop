import {DatabaseActions} from "./db";
import {request} from "../enums/request";
import axios, {AxiosResponse} from "axios/index";
import {Motorcycles, PostUser} from "../Types";


export class VariationActions extends DatabaseActions {
    private category = request.users
    public addVariation = async () => {}
    public deleteVariation = async () => {}
    public updateVariation = async () => {}

}