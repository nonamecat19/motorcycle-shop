import React, {ChangeEvent, FC, useState} from 'react'
import './AuthorizationLogin.scss'
import {useDispatch} from "react-redux"
import {useNavigate} from 'react-router-dom'
import {GoogleLogin} from "@react-oauth/google";
import jwt_decode, {JwtPayload} from "jwt-decode";
import {User, UsersResponse} from "../../../../Types";
import {UserActions} from "../../../../actions/user";

export interface AuthorizationLogin {

}

export const AuthorizationLogin: FC<AuthorizationLogin> = ({}) => {
    const navigate = useNavigate();
    const [create, setCreate] = useState<boolean>(false)

    const [login, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [firstName, setFirstName] = useState<string>('')
    const [lastName, setLastName] = useState<string>('')
    const [date, setDate] = useState<string>('')

    const dispatch = useDispatch()
    const responseGoogle = (response: any) => {
        let dataObj: any = jwt_decode(response.credential)
        console.log(dataObj)
        let data = {
            login: dataObj.email,
            password: dataObj.sub,
            firstName: dataObj.given_name ?? '',
            lastName: dataObj.family_name ?? ''
        }
        let userActions = new UserActions()
        userActions.googleAuth(data)
            .then((res: UsersResponse) => {
                userActions.setCookie('jwt', res.jwt, 7)
                navigate('/')
                location.reload()
            })
            .catch((err: any) => {
                console.error(err)
            })

    }
    const errorGoogle = () => {
        alert('Сталася помилка. Спробуйте ще раз.')
    }


    const AuthSubmitHandler = async (login: string, password: string) => {

        let data = {
            login: login,
            password: password
        }
        let userAction = await new UserActions()
        await userAction.loginUser(data)
            .then((response: UsersResponse) => {
                userAction.setCookie("jwt", response.jwt, 7);
            })
            .catch((error: any) => {
                console.log(error)
            })
        await userAction.validateUser()
            .then((response: User) => {
                if (response.id === -1) {
                    return
                }
                if (response.role == 'admin' || response.role == 'moderator') {
                    navigate("/admin/app")
                    location.reload()
                } else {
                    navigate("/")
                    location.reload()
                }
            })
    }







    const RegisterSubmitHandler = (login: string, password: string, firstName: string, lastName: string, date: string) => {
        let data = {
            login: login,
            password: password,
            firstName: firstName,
            lastName: lastName,
            dateOfBirth: date
        }
        let userAction = new UserActions()
        userAction.registerUser(data)
            .then((response: any) => {
                if (response === 'ok'){
                    alert('Ви успішно зареєструвалися')
                    setCreate(false)
                } else {
                    alert('Дані введені невірно')
                }
            })
            .catch(() => {
                alert('Користувач з таким логіном вже існує')
            })
    }

    // const RegisterSubmitHandler = async (login: string, password: string, firstName: string, lastName: string, date: string) => {
    //     let data = {
    //         login: login,
    //         password: password,
    //         firstName: firstName,
    //         lastName: lastName,
    //         dateOfBirth: date
    //     }
    //     let userAction = new UserActions()
    //     let currentToken = ''
    //     await userAction.registerUser(data)
    //         .then((response: any) => {
    //             userAction.setCookie("jwt", response.jwt, 7);
    //             userAction.validateUser(response.jwt)
    //                 .then((response: User) => {
    //                     if (response.id === -1) {
    //                         return
    //                     }
    //                     if (response.role == 'admin' || response.role == 'moderator') {
    //                         navigate("/admin/app")
    //                         location.reload()
    //                     } else {
    //                         navigate("/")
    //                         location.reload()
    //                     }
    //                 })
    //         })
    //         .catch(() => {
    //             userAction.loginUser(data)
    //                 .then((response: UsersResponse) => {
    //                     userAction.setCookie("jwt", response.jwt, 7);
    //                 })
    //                 .catch((error: any) => {
    //                     alert(error)
    //                 })
    //         })
    // }

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
                                            id="login"
                                            name="login"
                                            type="text"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder=" "
                                            value={login}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label
                                            htmlFor="login"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >Логін</label>
                                    </div>
                                    <div className="relative">
                                        <input
                                            id={"password"}
                                            name="password"
                                            type="password"
                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                            placeholder=" "
                                            value={password}
                                            onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                                        />
                                        <label
                                            htmlFor="password"
                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                        >Пароль</label>
                                    </div>
                                    {
                                        create
                                            ?
                                            <>
                                                <div className="flex">
                                                    <div className="relative mx-2">
                                                        <input
                                                            id="firstName"
                                                            name="login"
                                                            type="text"
                                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                            placeholder=" "
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                        />
                                                        <label
                                                            htmlFor="firstName"
                                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                        >Ім'я</label>
                                                    </div>
                                                    <div className="relative mx-2">
                                                        <input
                                                            id="lastName"
                                                            name="login"
                                                            type="text"
                                                            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                                            placeholder=" "
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                        />
                                                        <label
                                                            htmlFor="lastName"
                                                            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                                                        >Прізвище</label>
                                                    </div>
                                                </div>
                                                <div className="relative flex justify-center select-none">
                                                    <input
                                                        type='date'
                                                        value={date}
                                                        className=''
                                                        onChange={(e) => setDate(e.target.value)}
                                                    />
                                                </div>
                                            </>
                                            :
                                            <div className="relative">
                                                <GoogleLogin
                                                    onSuccess={responseGoogle}
                                                    onError={errorGoogle}
                                                />
                                            </div>
                                    }
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
                                            onClick={
                                                create
                                                    ?
                                                    () => RegisterSubmitHandler(login, password, firstName, lastName, date)
                                                    :
                                                    () => AuthSubmitHandler(login, password)
                                            }
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

