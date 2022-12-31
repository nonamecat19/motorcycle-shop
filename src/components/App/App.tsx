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


export const App = () => {
    const dispath = useDispatch()
    useEffect(() => {
        // @ts-ignore
        // dispath(getMotorcyclesAsync())
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

