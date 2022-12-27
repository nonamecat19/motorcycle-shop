import axios, {AxiosResponse} from "axios";
import {Motorcycles} from "./Types";

export const getMotorcycles = async () => {
    await axios
        .get('http://localhost:8888/api/users/')
        .then((response: AxiosResponse<Motorcycles>) => response.data)
}
