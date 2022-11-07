import React, {FC, Ref, useState} from 'react'
import './AdminPanel.scss'
import {Motorcycles, MotorcycleElement, Cache} from '../../Types'

export interface AdminPanelProps {
    cache: Cache,
    motorcycles: Motorcycles,
    setMotorcycles: Function,
    filtered: any,
    setFiltered: Function,
    cardsFilter: Function,
    filterBrand: Ref<any>,
    filterModel: Ref<any>
}

export const AdminPanel: FC<AdminPanelProps> = props => {


    const defaultBrand = (): string[] => {
        let res: string[] = []
        for (const i of props.motorcycles)
            res.push(i.brand)
        return res
    }
    const [brandData, setBrandData] = useState(defaultBrand())
    const brandHandler = (e: any) => {
        const id: number = e.target.name
        const value: string = e.target.value
        let res: string[] = brandData
        res[id] = value
        setBrandData(res)
    }


    const defaultModel = (): string[] => {
        let res: string[] = []
        for (const i of props.motorcycles)
            res.push(i.model)
        return res
    }
    const [modelData, setModelData] = useState(defaultModel())
    const modelHandler = (e: any) => {
        const id: number = e.target.name
        const value: string = e.target.value
        let res: string[] = modelData
        res[id] = value
        setModelData(res)
    }

    const defaultPrice = (): number[] => {
        let res: number[] = []
        for (const i of props.motorcycles)
            res.push(i.price)
        return res
    }
    const [priceData, setPriceData] = useState(defaultPrice())
    const priceHandler = (e: any) => {
        const id: number = e.target.name
        const value: number = parseInt(e.target.value)
        let res: number[] = priceData
        res[id] = value
        setPriceData(res)
    }

    const defaultImg = (): string[] => {
        let res: string[] = []
        for (const i of props.motorcycles)
            res.push(i.img)
        return res
    }
    const [imgData, setImgData] = useState(defaultImg())
    const imgHandler = (e: any) => {
        const id: number = e.target.name
        const value: string = e.target.value
        let res: string[] = imgData
        res[id] = value
        setImgData(res)
    }

    const defaultAvailable = (): boolean[] => {
        let res: boolean[] = []
        for (const i of props.motorcycles)
            res.push(i.available)
        return res
    }
    const [availableFlag, setAvailableFlag] = useState(defaultAvailable())
    const availableFlagHandler = (id: number) :void => {
        setAvailableFlag(availableFlag.map((item, index) => index === id ? !item : item))
    }


    const [deleteFlag, setDeleteFlag] = useState(new Array(props.motorcycles.length).fill(false))
    const deleteFlagHandler = (id: number) :void => {
        setDeleteFlag(deleteFlag.map((item, index) => index === id ? !item : item))
    }


    const changeData = () => {
        let temp = props.motorcycles
        let result: Motorcycles = []
        let index: number = 0
        for (let i: number = 0; i < props.motorcycles.length; i++){
            if(deleteFlag[i])
                continue
            let element: MotorcycleElement =
                {
                    "id": index,
                    "img": imgData[i],
                    "brand": brandData[i],
                    "model": modelData[i],
                    "price": priceData[i],
                    "available": availableFlag[i],
                    "color": "grey"
                }
            result.push(element)
            index++
        }
        localStorage.setItem('motorcycles', JSON.stringify(result))
        props.setMotorcycles(result)
        document.location.reload();
    }
    
    return(
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-middle">
                <div className="modal-box w-11/12 max-w-4xl">
                    <h3 className="font-bold text-lg">Адмінпанель</h3>
                    <div className="flex justify-between ml-2 text-center">
                        <div className="w-20">ID:</div>
                        <div className="w-32">Марка</div>
                        <div className="w-32">Модель</div>
                        <div className="w-32">Ціна</div>
                        <div className="w-32">Зображення</div>
                        <div className="w-24">Наявність</div>
                        <div className="w-24">Видалити</div>
                    </div>
                    <form>
                        <div className="window">
                            {
                                props.motorcycles.map(({id, img, brand, model, price}: MotorcycleElement) => (
                                    <div className="AdminPanelElement" key={id}>
                                        <label className="input-group flex justify-between">
                                            <span className="w-20">ID: {id}</span>
                                            <input
                                                type="text"
                                                className="input input-bordered input-sm w-32"
                                                defaultValue={brandData[id]}
                                                onChange={brandHandler}
                                                placeholder={brand}
                                                name={id.toString()}
                                            />
                                            <input
                                                type="text"
                                                className="input input-bordered input-sm w-32"
                                                defaultValue={modelData[id]}
                                                onChange={modelHandler}
                                                placeholder={model}
                                                name={id.toString()}
                                            />
                                            <input
                                                type="number"
                                                className="input input-bordered input-sm w-32"
                                                defaultValue={priceData[id]}
                                                onChange={priceHandler}
                                                placeholder={price.toString()}
                                                name={id.toString()}
                                            />
                                            <input
                                                type="text"
                                                className="input input-bordered input-sm w-32"
                                                defaultValue={imgData[id]}
                                                onChange={imgHandler}
                                                placeholder={img}
                                                name={id.toString()}
                                            />
                                            <input
                                                type="checkbox"
                                                className="checkbox ml-5 h-8 w-8"
                                                defaultChecked={availableFlag[id]}
                                                onChange={() => availableFlagHandler(id)}
                                            />
                                            <input
                                                type="checkbox"
                                                className="toggle toggle-error ml-14 mt-1"
                                                defaultChecked={deleteFlag[id]}
                                                onChange={() => deleteFlagHandler(id)}
                                            />
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal-6" className="btn">Вийти без змін</label>
                            <label onClick={() => changeData()} htmlFor="my-modal-6" className="btn">Внести зміни</label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}