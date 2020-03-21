import React from 'react';
import {useRedirect, useRoutes} from 'hookrouter';
import Header from '../Components/Common/Header';
// import Dashboard from '../Components/Common/Dashboard';

const img  = require('../img/xylem-wave.png');
const routes = {
    // '/': () => <Dashboard/>,
    // '/dashboard': () => <Dashboard/>,
};

const AppRoutes = () => {
    useRedirect('/', '/dashboard');
    const pages = useRoutes(routes);
    return (
        <div>
            <Header/>
            <div className="main-content w3-padding">
                {pages}
            </div>
        </div>
    );
};

export default AppRoutes;
