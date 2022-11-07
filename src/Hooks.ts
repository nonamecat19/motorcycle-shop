import {useState, useEffect} from "react";

export const useLocalStorage = (initialValue: string, key: string) => {
    const getValue = () => {
        const storage: string | null = localStorage.getItem(key)
        return storage ? JSON.parse(storage) : initialValue
    }
    const [value, setValue] = useState(getValue)

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}