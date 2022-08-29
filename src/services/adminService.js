import axios from "axios";

export default class AdminService{

    logIn(name , password){
        return axios.get("https://localhost:44361/api/Admins/entry?userName="+name+"&password="+password);
    }

    getAdmins(){
        return axios.get("https://localhost:44361/api/Admins/getall");
    }
}