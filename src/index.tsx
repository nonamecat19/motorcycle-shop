import React from 'react'
import ReactDOM from 'react-dom/client'
import './index/index.scss'
import {App} from './components/App/App'
import reportWebVitals from './index/reportWebVitals'
import {MyProviders} from './components/MyProviders/MyProviders'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <MyProviders>
            <App/>
        </MyProviders>
    </React.StrictMode>
)
reportWebVitals()
