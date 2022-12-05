import {FC} from 'react'
import './ProductPage.scss'
import {useParams} from "react-router-dom";

export interface ProductPageProps {

}

export const ProductPage: FC<ProductPageProps> = ({}) => {
    const {id} = useParams()
    return (
        <div className="ProductPage">
            ProductPage Component {id}
        </div>
    )
}

