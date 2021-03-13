import Axios from "./axiosServices";
const baseUrl = "https://backend-bookstore.herokuapp.com/bookstore_user"
const axios = new Axios();

export default class userServices {
    SignUp = (data) => {
        return axios.Post(`${baseUrl}/registration`, data);
    };

    SignIn = (data) => {
        return axios.Post(`${baseUrl}/login`, data);
    }

    AdminSignUp = (data) => {
        return axios.Post(`${baseUrl}/admin/registration`, data);
    };

    AdminSignIn = (data) => {
        return axios.Post(`${baseUrl}/admin/login`, data);
    }
}