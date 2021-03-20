import Axios from "./axiosServices";
const baseUrl = "https://backend-bookstore.herokuapp.com/bookstore_user";
const axios = new Axios();

export default class productServices {
  getBooks = () => {
    return axios.Get(`${baseUrl}/get/book`);
  };

  getWishListBooks = () => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Get(`${baseUrl}/get_wishlist_items`,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  };

  addToCart = (id) => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Post(`${baseUrl}/add_cart_item/${id}`,false,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  };
  addToWishList = (id) => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Post(`${baseUrl}/add_wish_list/${id}`,false,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  };

  getCartItem = () => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Get(`${baseUrl}/get_cart_items`, {
        headers: {
          "x-access-token": `${user}`,
        },
      });
  };

  deleteCartItem = (id) => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Delete(`${baseUrl}/remove_cart_item/${id}`,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  }

  deleteWishList = (id) => {
    const user = localStorage.getItem("bookStoreToken")
    return axios.Delete(`${baseUrl}/remove_wishlist_item/${id}`,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  }

  addOrder = (data) => {
    const user = localStorage.getItem("bookStoreToken")
    console.log(data);
    return axios.Post(`${baseUrl}/add/order`,data,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  };
  addQuantity = (data,cartItem_id) => {
    const user = localStorage.getItem("bookStoreToken")
    console.log(data);
    console.log(user)
    console.log(cartItem_id);
    return axios.Put(`${baseUrl}/cart_item_quantity/${cartItem_id}`,data,{
        headers: {
          "x-access-token": `${user}`,
        },
      });
  };
}