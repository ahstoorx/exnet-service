import axios from "axios";
import {AXIOS_HEADER} from './http-common'

const BASE_URL = AXIOS_HEADER.baseURL
class Expeditions{

    AddExpeditions(data){
        return axios.post(BASE_URL+`/expeditions`,data);
    }

    ExpeditionArchive(clientId){
        return axios.get(BASE_URL+`/expeditions/archives/${clientId}`);
    }

    ExpeditionCourse(clientId){
        return axios.get(BASE_URL+`/expeditions/courses/${clientId}`);
    }

    ExpeditionLivree(clientId){
        return axios.get(BASE_URL+`/expeditions/livrees/${clientId}`);
    }

    AllExpeditions(identifiant){
        return axios.get(BASE_URL+`/expeditions/users/${identifiant}`);
    }

    OneExpeditions(identifiant){
        return axios.get(BASE_URL+`/expeditions/${identifiant}`);
    }

    UpdateExpeditions(identifiant,data){
        return axios.put(BASE_URL+`/expeditions/${identifiant}`,data);
    }

    DeleteExpeditions(identifiant){
        return axios.delete(BASE_URL+`/expeditions/${identifiant}`);
    }

    expeditionUtilisateur(identifiant){
        return axios.get(BASE_URL+`/expediteur/expeditions/${identifiant}`)
    }

    expeditionUtilisateurDestinataire(identifiant){
        return axios.get(BASE_URL+`/destinataire/expeditions/${identifiant}`)
    }

    expeditionUtilisateurSurveillez(){
    return axios.get(BASE_URL+`/surveillez/expeditions/`)
   }

   addSurveillezExpedition(identifiant){
    return axios.get(BASE_URL+`/surveillez/expeditions/${identifiant}`)
   }

}

export default new Expeditions();