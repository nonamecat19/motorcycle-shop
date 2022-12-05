import './App.scss';
import {Route, Routes} from "react-router-dom";
import {AuthPage} from "../../pages/AuthPage/AuthPage";
import {ContentPage} from "../../pages/ContentPage/ContentPage";
import {ProductPage} from "../../pages/ProductPage/ProductPage";

export const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path='/' element={<ContentPage/>}/>
                <Route path='auth' element={<AuthPage/>}/>
                <Route path='products/:category/:id' element={<ProductPage/>}/>
            </Routes>
        </div>
    )
}

