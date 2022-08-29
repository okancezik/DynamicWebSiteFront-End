import axios from "axios";

export default class ProductService{

    getProducts(){
        return axios.get("https://localhost:44361/api/products/getall")
    }

    addProduct(values){
        return axios.post("https://localhost:44361/api/Products/add",values)
    }

    deleteProducts(productName){
        return axios.delete("https://localhost:44361/api/Products/delete?productName="+productName);
    }
}
