import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from 'store/reducers/mainReducer';

import api from 'store/middleware/api';

const store = () => configureStore({
    reducer,
    middleware: [
        api,
    ],
});

export default store;