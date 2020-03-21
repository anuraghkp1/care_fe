import React, { useEffect, useState } from 'react';
import './App.scss';
import LayoutRouter from './Router/LayoutRouter';
import AppRouter from './Router/AppRouter';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUser } from './Redux/actions';
import { CircularProgress } from '@material-ui/core';

const App: React.FC = () => {
    const dispatch: any = useDispatch();
    const state: any = useSelector(state => state);
    const { currentUser } = state;
    const [user, setUser] = useState(null);
    useEffect(() => {
        dispatch(getCurrentUser()).then((resp: any) => {
            const res = resp && resp.data;
            if (res && res.success && res.data) {
                setUser(res.data);
            }
        });
    }, [dispatch]);

    if (!currentUser || currentUser.isFetching) {
        return (
            <div className="textMarginCenter">
                <CircularProgress/>
            </div>
        );
    }
    if (user) {
        return <AppRouter/>;
    } else {
        return <LayoutRouter/>;
    }
};

export default App;
