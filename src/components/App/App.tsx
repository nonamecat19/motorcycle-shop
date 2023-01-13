import './App.scss'
import {Route, Routes} from "react-router-dom"
import {AuthPage} from "../../pages/AuthPage/AuthPage"
import {ContentPage} from "../../pages/ContentPage/ContentPage"
import {ProductPage} from "../../pages/ProductPage/ProductPage"
import {useEffect} from "react"
import {getMotorcyclesAsync} from "../../redux/slices/motorcyclesSlicer"
import {useDispatch} from 'react-redux'
import {ProfilePage} from "../../pages/ProfilePage/ProfilePage"
import {AdminPage} from "../../pages/AdminPage/AdminPage"
import {NotFoundPage} from "../../pages/NotFoundPage/NotFoundPage";
import {getCurrentUserAsync} from "../../redux/slices/currentUserSlicer";
import {MotorcycleActions} from "../../actions/motorcycle";

export const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {

        new MotorcycleActions().getMotorcycles()
        .then((res: any) =>
                localStorage.setItem(
                    'motorcycles',
                    JSON.stringify(res ?? [])
                )
        )
        // @ts-ignore
        dispatch(getMotorcyclesAsync())
        // @ts-ignore
        dispatch(getCurrentUserAsync())
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route
                    path='/'
                    element={<ContentPage/>}
                />

                <Route
                    path='auth'
                    element={<AuthPage/>}
                />

                <Route
                    path='products/:category/:id'
                    element={<ProductPage/>}
                />

                <Route
                    path='admin/:category'
                    element={<AdminPage/>}
                />

                <Route
                    path='profile'
                    element={<ProfilePage/>}
                />

                <Route
                    path='*'
                    element={<NotFoundPage/>}
                />
            </Routes>
        </div>
    )
}

