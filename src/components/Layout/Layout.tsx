import { useEffect, useState } from 'react';
import { Navigate, Route, useLocation } from "react-router";
import { Routes } from "react-router-dom";
import { getToken } from '../../api/auth';
import App from "../../App";
import { useAppSelector } from '../../store';
import Search from "../Search/Search";
import Header from "./Header/Header";
import Player from "./Player/Player";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {

    const location = useLocation();
    
    const [token, setToken] = useState(JSON.parse(localStorage.getItem("token") as string));
    const currentTime = new Date();
    const storedExpireTime = new Date(token ? token.expireTime : null);

    const fetchToken = async () => {
        const response = await getToken();
        setToken(response);
        localStorage.setItem("token", JSON.stringify(response));
    }

    useEffect(() => {
        if (!token || (token && currentTime >= storedExpireTime)) {
            fetchToken();
        } 
    }, [location]);

    return (
        <div className="main">
            <Sidebar />
            <div className="main__content">
                <Header />
                <div className="main__content__child">
                    <>
                        {
                            token !== null && <Routes>
                                <Route path='/' element={<Navigate to='/home' />} />
                                <Route path='/home/*' element={<App />} />
                                <Route path='/search' element={<Search />} />
                            </Routes>
                        }
                    </>
                </div>
            </div>
            <Player />
        </div>
    );
}

export default Layout;
