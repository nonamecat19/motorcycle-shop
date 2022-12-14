import axios from "axios";

export const getMotorcycles = async () => {
    await axios.get('http://localhost:8888/api/user/get').then(function (response) {
        return response.data
    })
}
