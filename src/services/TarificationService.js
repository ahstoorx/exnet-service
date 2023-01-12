import axios from "axios";
import { AXIOS_HEADER } from './http-common'

const BASE_URL = AXIOS_HEADER.baseURL

class Tarification {


    addTarif(data) {
        return axios.post(BASE_URL + `/tarif`, data);
    }

    userTarification() {
        return axios.get(BASE_URL + `/tarif`);
    }

    getTarif(id) {
        return axios.get(BASE_URL + `/tarif/${id}`);
    }

    updateTarif(id, data) {
        return axios.put(BASE_URL + `/tarif/${id}`, data);
    }

    deleteTarif(id) {
        return axios.delete(BASE_URL + `/tarif/${id}`);
    }
}

export default Tarification;