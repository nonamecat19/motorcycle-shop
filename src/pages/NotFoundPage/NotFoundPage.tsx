import React, { FC } from 'react'
import './NotFoundPage.scss'

export interface NotFoundPageProps {

}

export const NotFoundPage: FC<NotFoundPageProps> = ({}) => {
    return(
        <div className="NotFoundPage">
            <div className="flex-container">
                <div className="text-center">
                    <h1>
                        <span className="fade-in" id="digit1">4</span>
                        <span className="fade-in" id="digit2">0</span>
                        <span className="fade-in" id="digit3">4</span>
                    </h1>
                    <h3 className="fadeIn">Сторінка не знайдена</h3>
                    <a type="button" className='toMain' href='/'>На головну</a>
                </div>
            </div>
        </div>
    )
}

