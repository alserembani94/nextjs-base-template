// This sample is created from the AIVI reducers for your reference
// But this one is not called to reducer. Remember to add it to
// main reducer after create one.

import { createSlice } from '@reduxjs/toolkit'
import { apiCallBegan } from '../api'

const form_route = {
    save: `/forms/create`,
    load: `/form`,
}

/*

USE CASE
1. Form saved and submitted successfully
2. Form saved and submitted but failed
3. Form loaded successfully
4. Form loadded with errors

*/

const slice = createSlice({
    name: 'form',
    initialState: {
        formType: undefined,
        formContent: undefined,
        error: undefined,
        loading: false,
        message: undefined,
    },
    reducers: {
        formAdded: (form: any, action: any) => {
            const {
                formType,
                formContent,
            } = action.payload;
            form.formType = formType;
            form.formContent = formContent;
            form.message = "Form added successfully!";
        },
        formSaved: (form: any, action: any) => {
            const {
                formType,
                formContent,
            } = action.payload;
            form.formType = formType;
            form.formContent = formContent;
            form.loading = false;
            form.message = "Form saved successfully!";
        },
        formRequested: (form: any, action: any) => {
            form.loading = true;
            form.error = undefined;
        },
        formRequestFailed: (form: any, action: any) => {
            form.loading = false;
            form.error = action.payload;
        },
        formLoaded: (form: any, action: any) => {
            const {
                formType,
                formContent,
            } = action.payload;
            form = {
                ...form,
                formType,
                formContent,
                message: "Form loaded successfully!"
            };
        },
    },
});

const {
    formSaved,
    formRequested,
    formRequestFailed,
    formLoaded,
} = slice.actions;

export const {
    formAdded
} = slice.actions;
export default slice.reducer;

type FormType =
    "Balance Transfer Application" |
    "Cash From Card Application" |
    "Credit Card Recommendation" |
    "Personal Loan Recommendation" |
    "Credit Card Application" |
    "Personal Loan Application";

export const saveForm = (formType: FormType, formContent: any, user: string) => apiCallBegan({
    apiName: 'strapi',
    url: '/forms',
    method: 'post',
    data: {
        formType,
        formContent,
        user,
    },
    onStart: formRequested.type,
    onSuccess: formSaved.type,
    onError: formRequestFailed.type,
});