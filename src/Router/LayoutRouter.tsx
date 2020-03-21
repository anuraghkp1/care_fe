import React from 'react';
import { useRoutes } from 'hookrouter';
import TopBar from '../Components/Common/TopBar';


const routes = {
    // '/': () => <Login/>,
    // '/login': () => <Login/>,
    // '/register': () => <Register/>,
};

const LayoutRoutes = () => {
    // const content = useRoutes(routes) || <Login/>;
    return <div className="app-auth-form">
        <TopBar/>
        <div className="w3-padding">
            {/*{content}*/}
        </div>
    </div>;

};

export default LayoutRoutes;
