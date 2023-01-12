import axios from "axios";
import {AXIOS_HEADER} from './http-common'

const BASE_URL = AXIOS_HEADER.baseURL


class Enevement{

    AddEnlevement(data){

        return axios.post(BASE_URL+`/enlevement`,data);
    }

    GetEnlevement(userId){

        return axios.get(BASE_URL+`/enlevement/user/${userId}`);
    }

    GetEnlevementCourse(userId){

        return axios.get(BASE_URL+`/enlevement/course/user/${userId}`);
    }

    DeletEnlevement(identifiant){

        return axios.delete(BASE_URL+`/enlevement/${identifiant}`);
    }

    UpdateEnlevement(identifiant,data){

        return axios.put(BASE_URL+`/enlevement/${identifiant}`,data);
    }
}

export default new Enevement();