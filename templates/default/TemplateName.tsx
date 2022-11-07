import React, { FC } from 'react'
import './TemplateName.scss'

export interface TemplateNameProps {

}

export const TemplateName: FC<TemplateNameProps> = props => {
    return(
        <div className="TemplateName">
            TemplateName Component
        </div>
    )
}

