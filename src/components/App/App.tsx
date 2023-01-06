import './App.scss'
import {Route, Routes} from "react-router-dom"
import {AuthPage} from "../../pages/AuthPage/AuthPage"
import {ContentPage} from "../../pages/ContentPage/ContentPage"
import {ProductPage} from "../../pages/ProductPage/ProductPage"
import PaymentForm from '../PaymentForm/App'
import {useEffect} from "react"
import {getMotorcyclesAsync} from "../../redux/slices/motorcyclesSlicer"
import {useDispatch} from 'react-redux'
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage"
import {AdminPage} from "../../pages/AdminPage/AdminPage"
import axios, {AxiosResponse} from "axios";
import {Motorcycles} from "../../Types";


export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        const options = {
            url: 'http://localhost:8888/api/moto/',
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };


        axios(options)
            .then((response: AxiosResponse<Motorcycles>) => console.log(response.data))

        // @ts-ignore
        dispatch(getMotorcyclesAsync())


    }, [])




    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<ContentPage/>}/>
                <Route path='auth' element={<AuthPage/>}/>
                <Route path='products/:category/:id' element={<ProductPage/>}/>

                <Route path='admin/:category' element={<AdminPage/>}/>

                <Route path='card' element={<PaymentForm/>}/>
                <Route path='profile' element={<ProfilePage/>}/>
            </Routes>
        </div>
    )
}

