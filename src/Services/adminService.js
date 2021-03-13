import Axios from "./axiosServices";
const baseUrl = "https://backend-bookstore.herokuapp.com/bookstore_user";
const axios = new Axios();

export default class AdminServices {
    addNewBookToSystem = (data) => {
    console.log(data)
    const user = localStorage.getItem("StoreToken")
    return axios.Post(`${baseUrl}/admin/add/book`,data,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  };
}