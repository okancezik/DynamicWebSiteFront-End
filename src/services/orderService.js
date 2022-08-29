import axios from "axios";

export default class OrderService{

    getOrders(){
        return axios.get("https://localhost:44361/api/Orders/getall");
    }

    getOrderDetails(){
        return axios.get("https://localhost:44361/api/Orders/getorderdetails");
    }

    deleteOrder(orderProductId , customerId){
        return axios.delete("https://localhost:44361/api/Orders/delete?orderProductId=" 
        + orderProductId 
        + "&customerId="+customerId);
    }

    addOrder(values){
        return axios.post("https://localhost:44361/api/Orders/add",values);
    }
}