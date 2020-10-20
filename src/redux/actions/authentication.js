import decode from "jwt-decode";
import Cookies from 'js-cookie';
import {SET_CURRENT_USER} from "./actionTypes";

import instance from "./instance";


const setAuthToken = token => {
    if (token) {
        Cookies.set("token", token);
        instance.defaults.headers.Authorization = `jwt ${token}`;
        Cookies.set("token", token)
    } 
    else {
        delete instance.defaults.headers.Authorization;
        Cookies.remove("token")
    }
}

export const login = (userData) => {
    return async dispatch => {
        try {
            const responce = await instance.post('/login/', userData);
            console.log(responce.data)
            const {token} = responce.data
            dispatch(setCurrentUser(token));
        } catch (err) {
            console.error(err);
        }
    }
};

export const signup = (userData) => {
    return async dispatch => {
        try{
            const responce = await instance.post("/signup/", userData)
            const {token} = responce.data;
            dispatch(setCurrentUser(token));
        }catch(error){
            console.error("wrong signup");
        }
        dispatch(login(userData))
    };
};

export const logout = () => setCurrentUser();

const setCurrentUser = (token) => {
    setAuthToken(token)
    const user = token ? decode (token) : null;
    return {
        type: SET_CURRENT_USER,
        payload: user
    }
}

  export const checkForExpiredToken = () => {
    const token = Cookies.get("token");
    if (token) {
        const currentTimeInSeconds = Date.now() / 1000;
        const userData = decode (token);
        if (userData.exp >= currentTimeInSeconds) {
            return setCurrentUser(token);
        }
    }
    return setCurrentUser();
}
export const authenticateUser = (userData, history, type) => 
    async dispatch => {
        try{
            let response = await instance.post(`/${type}/`, userData)
            let { token } = response.data
            dispatch(setCurrentUser(token)) 
            console.log(history)
            history.push("/login")
            
        } catch (error) {
            console.error(error)
        } }