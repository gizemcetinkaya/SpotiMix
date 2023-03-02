import { Navigate, Route } from "react-router";
import { Routes } from "react-router-dom";
import App from "../../App";
import Search from "../Search/Search";
import Header from "./Header/Header";
import Player from "./Player/Player";
import Sidebar from "./Sidebar/Sidebar";

const Layout = () => {
    return (
        <div className="main">
            <Sidebar />
            <div className="main__content">
                <Header />
                <div className="main__content__child">
                    <><Routes>
                        <Route path='/' element={<Navigate to='/home' />} />
                        <Route path='/home/*' element={<App />} />
                        <Route path='/search' element={<Search />} />
                    </Routes>
                    </>
                </div>
            </div>
            <Player />
        </div>
    );
}

export default Layout;
