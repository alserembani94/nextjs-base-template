import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../api';

const slice = createSlice({
    name: 'one',
    initialState: {
        // any initial state for "one"
        param1: '',
        param2: undefined,
        param3: [],
        loading: false,
        status: 'ANY',
        error: undefined,
    },
    reducers: {
        startRequest: (prevState: any, action: any) => {
            prevState.loading = true;
            prevState.status = 'PENDING REQUEST';
            prevState.error = undefined;
        },
        requestFailed: (prevState: any, action: any) => {
            prevState.loading = true;
            prevState.status = 'PENDING REQUEST';
            prevState.error = action.payload;
            // Can also be debugged by console.log(object)
        },
        actionOne: (prevState: any, action: any) => {
            // mutation to the state using immer style
            prevState.param1 = 'Change to anything';
            prevState.param2 = 'Can also flip undefined to any type';
            prevState.param3 = ['asdasd'];
            // Array mutation in immer style can use push, pop, shift, unshift, flat or slice.
        },
        actionTwo: (prevState: any, action: any) => {
            // mutation to the state using immer style
            prevState.param1 = 'Change to anything';
            prevState.param2 = 'Can also flip undefined to any type';
            prevState.param3 = ['asdasd'];
            // Array mutation in immer style can use push, pop, shift, unshift, flat or slice.
        }
    },
});

// If you want to use for redux thunk for API call,
// destructure the action to use later
const {
    actionOne,
    startRequest,
    requestFailed,
} = slice.actions;

// In case you didn't need redux thunk and want to
// use direct, you can export and use later
export const {
    actionTwo,
} = slice.actions;

// Make sure slice reducer is default export - a must to use this reducer
export default slice.reducer;

// This is redux thunk actions, to handle effect like API calls
export const thunkActionOne = (payload: any) => apiCallBegan({
    apiName: 'backend-name',
    url: '/your/api/endpoint',
    method: 'post', // your request method

    // Down here are all optional, use whichever needed
    // but usually onSuccess is needed to populate redux state
    data: {
        // data content here, can use data from payload
    },
    header: {
        'Authorization': 'Bearer USER_SECRET_KEY',
        // header is already created for CORS support,
        // but if you need customization, change inside middleware API.
    },
    onStart: startRequest.type,
    onSuccess: actionOne.type,
    onError: requestFailed.type,
});