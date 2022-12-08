import './App.scss';
import {Route, Routes} from "react-router-dom";
import {AuthPage} from "../../pages/AuthPage/AuthPage";
import {ContentPage} from "../../pages/ContentPage/ContentPage";
import {ProductPage} from "../../pages/ProductPage/ProductPage";
import PaymentForm from '../PaymentForm/App';

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<ContentPage/>}/>
                <Route path='auth' element={<AuthPage/>}/>
                <Route path='products/:category/:id' element={<ProductPage/>}/>

                <Route path='card' element={<PaymentForm/>}/>
            </Routes>
        </div>
    )
}

