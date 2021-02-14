import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { login } from './actions/auth';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';
import './styles/styles.scss';
// import './styles.css';



export const FeedApp = () => {
 
    return (

        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
