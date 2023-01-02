import axios, {AxiosResponse} from "axios";
import {Motorcycles} from "@types";

export const getMotorcycles = async () => {
    let data;
    await axios
        .get('http://localhost:8888/api/moto/getMoto/')
        .then((response: AxiosResponse<Motorcycles>) => data = response.data)
    return await data
}
