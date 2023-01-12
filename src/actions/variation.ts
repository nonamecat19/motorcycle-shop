import {DatabaseActions} from "./db";
import {request} from "../enums/request";
import axios from "axios";


export class VariationActions extends DatabaseActions {
    private category = request.variations
    public addVariation = async (formData: FormData, state: any) => {
        return axios({
            method: 'POST',
            url: `http://localhost:8888/${this.category}?${this.parametrizedAxios(state).replaceAll('#', '')}`,
            data: formData,
        })
    }
    public deleteVariation = async (id: number) => {
        return axios({
            method: 'DELETE',
            url: `http://localhost:8888/${this.category}?id=${id}`,
        })
    }
    public updateVariation = async (formData: FormData, state: any) => {
        return axios({
            method: 'PUT',
            url: `http://localhost:8888/${this.category}?${this.parametrizedAxios(state)}`,
            data: formData,
        })
    }

}