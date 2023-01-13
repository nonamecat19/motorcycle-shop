import './Sidebar.scss'
import {FC, useContext, useState} from "react";
import {useDispatch} from 'react-redux';
import {cardsFilter, setMinMax} from '../../../redux/slices/motorcyclesSlicer';
import {MyContext} from '../../../components/ContextStore/ContextStore';
import {ContextStoreType} from "../../../Types";
import InputRange from 'react-input-range';
import React from 'react';

export interface SidebarProps {

}

export const Sidebar: FC<SidebarProps> = ({}) => {
    const dispatch = useDispatch()
    const context = useContext(MyContext) as ContextStoreType
    const {filterBrand, filterModel} = context

    const filterHandler = () => {
        // TODO fix TS
        const data:{
            brand: string,
            model: string,
        } = {
            // @ts-ignore
            model: filterModel?.current.value,
            // @ts-ignore
            brand: filterBrand?.current.value
        }
        dispatch(cardsFilter(data))
    }
    // @ts-ignore
    return (
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
            <Range/>
        </div>
    )
}


const Range = () => {
    type RangeType = {min: number, max: number}
    const minValue = 0
    const maxValue = 4_000_000
    const [value, setValue] = useState<RangeType>({min: minValue, max: maxValue})
    const dispatch = useDispatch()
    const onChangeHandler = (value: any) => {
        if (value.min >= minValue && value.max <= maxValue) {
            setValue(value)
            dispatch(setMinMax(value))
        }
    }

    return (
        <div className="InputRange">
            <InputRange
                maxValue={maxValue}
                minValue={minValue}
                step={10000}
                value={value}
                onChange={onChangeHandler}
            />
        </div>
    )
}