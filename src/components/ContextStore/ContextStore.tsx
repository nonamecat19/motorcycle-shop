import {createContext, FC, ReactNode, useRef} from 'react'
import {ContextStoreType} from '../../Types';
import './ContextStore.scss'

export interface ContextStoreProps {
    children: ReactNode;
}

export const MyContext = createContext({})
export const ContextStore: FC<ContextStoreProps> = (props) => {
    let contextValue: ContextStoreType = {
        notifyRef: useRef<HTMLInputElement | null>(null),
        filterBrand: useRef<HTMLSelectElement | null>(null),
        filterModel: useRef<HTMLInputElement | null>(null)
    }
    return (
        <MyContext.Provider value={contextValue}>
            {props.children}
        </MyContext.Provider>
    )
}

