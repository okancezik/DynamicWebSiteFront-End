import axios from "axios";


export default class MessageService{
 
    getMessages(){
        return axios.get("https://localhost:44361/api/Messages/getall");
    }

    addMessage(values){
        return axios.post("https://localhost:44361/api/Messages/add",values);
    }
}