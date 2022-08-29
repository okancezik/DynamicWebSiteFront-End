import axios from "axios"

export default class CustomerService{
    getCustomers(){
        return axios.get("https://localhost:44361/api/Customers/getall")
    }

    addCustomer(values){
        return axios.post("https://localhost:44361/api/Customers/add",values);
    }

    deleteCustomer(companyName){
        return axios.delete("https://localhost:44361/api/Customers/delete?companyName="+companyName);
    }
}