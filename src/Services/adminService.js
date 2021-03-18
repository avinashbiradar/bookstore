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

  deleteItem = (id) => {
    console.log(id)
    const user = localStorage.getItem("StoreToken")
    return axios.Delete(`${baseUrl}/admin/delete/book/${id}`,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  }
  UpdateBookInfo = (data,book_id) => {
    const user = localStorage.getItem("StoreToken")
    console.log("data in update book info " , data);
    console.log("data in update book info ",book_id);
    return axios.Put(`${baseUrl}/admin/update/book/${book_id}`,data,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  };
}