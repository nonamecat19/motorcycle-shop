import React, {ChangeEvent, FC, useState} from 'react'
import './AuthorizationLogin.scss'
import {useDispatch} from "react-redux"
import {toggleAuthForm} from "../../redux/slices/authFormSlicer"
import {useNavigate} from 'react-router-dom'
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios, {AxiosResponse} from "axios";
import {User, UsersResponse} from "../../Types";
import {setUser} from "../../redux/slices/currentUserSlicer";

export interface AuthorizationLogin {

}

export const AuthorizationLogin: FC<AuthorizationLogin> = ({}) => {
    const navigate = useNavigate();
    const [create, setCreate] = useState<boolean>(false)
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [remember, setRemember] = useState<boolean>(false)

    const dispatch = useDispatch()
    const passwordInput = (repeat: boolean) => {
        return (
            <div className="relative">
                <input
                    id={repeat ? "repeatPassword" : "password"}
                    name="password"
                    type="password"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="*"
                    value={password}
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Пароль</label>
            </div>

        )
    }

    const responseGoogle = async (response: any) => {
        let dataObj: any = await jwt_decode(response.credential)
        let surname: string = await dataObj.family_name ? dataObj.family_name : ''
        console.log(dataObj)
        await axios({
            method: 'GET',
            url: 'http://localhost:8888/api/users/register/',
            params: {
                'login': dataObj.email,
                'first_name': dataObj.given_name,
                'second_name': surname,
                'password': dataObj.sub,
            }
        })
            .then((response: AxiosResponse<any>) => {
                    let id = 0
                    let first_name = dataObj.given_name
                    let last_name = surname
                    let role = 'user'
                console.log( {id, first_name, last_name, role})
                    dispatch(setUser({id, first_name, last_name, role}))
                    navigate("/")
                    dispatch(toggleAuthForm())
                }
            )
    }
    const errorGoogle = () => {
        console.log('error');
    }


    const AuthSubmitHandler = async () => {
        let fail = false
        console.log(email, password)
        await axios({
            method: 'GET',
            url: 'http://localhost:8888/api/users/auth/',
            params: {
                'login': email,
                'password': password
            }
        })
            .then((response: AxiosResponse<UsersResponse>) => {
                    if (typeof response.data == 'boolean') {
                        console.log('Помилка авторизації');
                        fail = true
                        return
                    }
                    const {id, firstName, lastName, role}: User = response.data;
                    dispatch(setUser({id, firstName, lastName, role}))
                }
            )
        if (!fail){
            await navigate("/")
        }
        await dispatch(toggleAuthForm())
    }


    const RegisterSubmitHandler = async () => {
        await axios({
            method: 'GET',
            url: 'http://localhost:8888/api/users/register/',
            params: {
                'login': email,
                'first_name': 'a',
                'second_name': 'a',
                'password': password
            }
        })
            .then((response: AxiosResponse<any>) => {
                    if (response.data) {
                        dispatch(setUser({id: 0, first_name: 'Петро', second_name: 'Мельник', role: 'user'}))
                        navigate("/")
                        dispatch(toggleAuthForm())
                    } else {
                        console.log('Помилка реєстрації');
                    }
                }
            )
    }

    const RememberMe = () => {
        return (
            <div className="h-10">
                <input type="checkbox"
                       checked={remember}
                       onChange={(e) => setRemember(!remember)}
                />
                <label htmlFor="rememberMe"> Запам'ятати мене</label>
            </div>
        )
    }

    return (
        <div className="AuthorizationFormLogin">
            <div className="parent">
                <div className="relative py-0">
                    <div className="back"></div>
                    <div className="front">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-3xl font-semibold text-center mb-6">
                                    {create ? "Зареєструватися" : "Логін"}
                                </h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input
                                            id="email"
                                            name="email"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder="*"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >Електронна пошта</label>
                                    </div>
                                    {passwordInput(false)}
                                    {create ? passwordInput(true) : RememberMe()}
                                    <div className="relative">
                                        <GoogleLogin
                                            onSuccess={responseGoogle}
                                            onError={errorGoogle}
                                        />
                                    </div>
                                    <div className="relative">
                                        <button
                                            onClick={() => setCreate(!create)}
                                            className="text-orange-500 underline"
                                        >
                                            {create ? "Я вже маю аккаунт" : "Не маєте аккаунта?"}
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <button
                                            className="auth-submit text-white rounded-md px-4 py-1"
                                            onClick={create ? RegisterSubmitHandler : AuthSubmitHandler}
                                        >
                                            {create ? "Зареєструватися" : "Ввійти"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

