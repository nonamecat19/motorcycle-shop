import './Sidebar.scss'
import {Ref} from "react";
import {useDispatch, useSelector} from 'react-redux';
import { cardsFilter } from '../../redux/slices/motorcyclesSlicer';

export interface SidebarProps {
    filterModel: any
    filterBrand: any
}

export const Sidebar = ({filterModel,filterBrand}: SidebarProps) => {
    const dispatch = useDispatch()
    const filterHandler = () => {
        const data = {
            model: filterModel?.current.value,
            brand: filterBrand?.current.value
        }
        dispatch(cardsFilter(data))
    }
    return(
        <div className='Sidebar'>
            <label htmlFor="brandFilter">Марка</label>
            <select
                onInput={filterHandler}
                ref={filterBrand}
                defaultValue='All'
                id="brandFilter"
                className="select select-bordered w-full max-w-xs mb-4"
            >
                <option value="All">Всі марки</option>
                <option value="Kawasaki">Kawasaki</option>
                <option value="Honda">Honda</option>
                <option value="Suzuki">Suzuki</option>
                <option value="Yamaha">Yamaha</option>
                <option value="KTM">KTM</option>
            </select>
            <label htmlFor="modelFilter">Модель</label>
            <input
                id="modelFilter"
                type="text"
                placeholder="Ninja 250R"
                className="input w-full max-w-xs"
                ref={filterModel}
                onInput={filterHandler}
            />
        </div>
    )
}