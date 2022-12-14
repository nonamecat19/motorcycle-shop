import React, {FC, useState} from 'react'
import './AuthorizationLogin.scss'
import GoogleLogin from 'react-google-login';
import {useDispatch, useSelector} from "react-redux";
import {toggleAuthForm} from "../../redux/slices/authFormSlicer";
import {redirect, useNavigate} from 'react-router-dom';

export interface AuthorizationLogin {

}

export const AuthorizationLogin: FC<AuthorizationLogin> = ({}) => {
    const navigate = useNavigate();
    const [create, setCreate] = useState(false)

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
                />
                <label
                    htmlFor="password"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                >Пароль</label>
            </div>

        )
    }

    const responseGoogle = (response: any) => {
        console.log(response);
    }

    const AuthSubmitHandler = () => {
        navigate("/")
        dispatch(toggleAuthForm())
    }

    const RememberMe = () => {
        return(
            <div className="h-10">
                <input type="checkbox"

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
                                            className={"googleLogin"}
                                            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                                            buttonText={create ? "Зареєструватися з Gmail" : "Увійти з Gmail"}
                                            onSuccess={responseGoogle}
                                            onFailure={responseGoogle}
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
                                            onClick={AuthSubmitHandler}
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

