import {FC} from 'react'
import './ContentPage.scss'
import {Content} from "../../components/Content/Content";
import App from '../../components/PaymentForm/App';

export interface ContentPageProps {

}

export const ContentPage: FC<ContentPageProps> = ({}) => {
    return (
        <div className="ContentPage">
            <Content/>
        </div>
    )
}

