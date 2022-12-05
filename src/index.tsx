import React from 'react';
import ReactDOM from 'react-dom/client';
import './index/index.scss';
import {App} from './components/App/App';
import reportWebVitals from './index/reportWebVitals';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {BrowserRouter} from "react-router-dom";
import {ContextStore} from "./components/ContextStore/ContextStore";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
                    <ContextStore>
                        <App/>
                    </ContextStore>
                </DevSupport>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
