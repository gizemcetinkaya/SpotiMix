import axios from "axios";
import qs from 'qs';
import { AuthResponse } from "../types/auth";

export const getToken = async () => {
    const response = await axios.post<AuthResponse>(process.env.REACT_APP_TOKEN_URL || "",
        qs.stringify({
            grant_type: "client_credentials",
            client_id: process.env.REACT_APP_CLIENT_ID,
            client_secret: process.env.REACT_APP_CLIENT_SECRET,
        }),
        {
            headers: {
                "Content-type": "application/x-www-form-urlencoded",
            },
        });

    const expireTime = new Date();
    expireTime.setSeconds(expireTime.getSeconds() + response.data.expires_in);
    const token = {
        ...response.data,
        expireTime: expireTime.toString()
    }
    localStorage.setItem("token", JSON.stringify(token));

    return token;
};