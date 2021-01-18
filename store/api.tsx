import { createAction } from '@reduxjs/toolkit';

// Add the backend here
export type ApiPoint =
                    "backend-name" |
                    "any-backend-name";

type baseURLType = (apiPoint: ApiPoint) => string;

export const getBaseURL: baseURLType = apiPoint => {
    switch (apiPoint) {
        case 'backend-name': return 'https://backend-name.url.com';
        case 'any-backend-name': return 'https://other.backend.com';
        default: return 'https://backend-name.url.com';
    }
}

export const apiCallBegan: (any) = createAction("api/callBegan");
export const apiCallSuccess: (any) = createAction("api/callSuccess");
export const apiCallFailed: (any) = createAction("api/callFailed");
