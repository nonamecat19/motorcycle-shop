import React, { FC } from 'react'
import './VariationColor.scss'

export interface VariationColorProps {
    color1: string
    color2: string
    size?: number
}

export const VariationColor: FC<VariationColorProps> = ({color1, color2, size = 20}) => {
    return(
        <div className="border border-[5px] rounded-full">
            <div
                className='VariationColor w-0 h-0 rounded-lg hover:scale-125 duration-500 rounded-full'
                style={{
                    borderWidth: size + 'px',
                    borderStyle: 'solid',
                    borderColor: `${color1} ${color2} ${color2} ${color1}`,
                }}
            >
            </div>
        </div>

    )
}

