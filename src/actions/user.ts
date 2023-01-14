import axios, {AxiosResponse} from "axios";
import {PostUser, User} from "../Types";
import {DatabaseActions} from "./db";
import {request} from "../enums/request";

export class UserActions extends DatabaseActions {
    private category = request.users
    public getUsers = async (params?: any): Promise<User[] | undefined> => {
        let data;
        await axios
            .get(`${process.env.REACT_APP_HOST}${this.category}?`)
            .then((response: AxiosResponse<User[]>) => data = response.data)
        return await data
    }
    public addUser = async (params: any): Promise<void> => {
        let path = this.parametrizedAxios(params)
        await axios
            .post(`${process.env.REACT_APP_HOST}${this.category}?${path}&jwt=${this.getCookie()}`)
    }

    public updateUser = async (params: any): Promise<void> => {
        let path = this.parametrizedAxios(params)
        await axios
            .put(`${process.env.REACT_APP_HOST}${this.category}?${path}&jwt=${this.getCookie()}`)
    }

    public deleteUser = async (id: number): Promise<void> => {
        await axios
            .delete(`${process.env.REACT_APP_HOST}${this.category}?id=${id}&jwt=${this.getCookie()}`)
    }

    public registerUser = async (params: any): Promise<void> => {
        let data;
        let path = this.parametrizedAxios(params)
        await axios
            .post(`${process.env.REACT_APP_HOST}register?${path}`)
            .then((response: AxiosResponse<any>) => data = response.data)
        return await data
    }

    public googleAuth = async (params: any): Promise<any> => {
        let data;
        let path = this.parametrizedAxios(params)
        await axios
            .post(`${process.env.REACT_APP_HOST}googleAuth?${path}`)
            .then((response: AxiosResponse<any>) => data = response.data)
        return await data
    }

    public loginUser = async (params: any): Promise<any> => {
        let path = this.parametrizedAxios(params)
        let data;
        await axios
            .post(`${process.env.REACT_APP_HOST}login?${path}`)
            .then((response: AxiosResponse<any>) => data = response.data)
        return await data
    }

    public validateUser = async (token: string = ''): Promise<any> => {
        let data;
        await axios
            .post(`${process.env.REACT_APP_HOST}validateToken?jwt=${this.getCookie()}`)
            .then((response: AxiosResponse<any>) => data = response.data)
            .catch(() => data = {
                id: -1,
                login: '',
                firstName: '',
                lastName: '',
                role: 'user',
                dateOfBirth: ''
            })
        return await data
    }

    public setCookie (name: string, value: any, days:number ) {
        let expires = "";
        if (days) {
            let date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    public getCookie () {
        let nameEQ = "jwt=";
        let ca = document.cookie.split(';');
        for(let i=0;i < ca.length;i++) {
            let c = ca[i];
            while (c.charAt(0)==' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
}