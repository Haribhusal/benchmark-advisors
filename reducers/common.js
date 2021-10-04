import {
    GET_COMPANY_CATEGORIES,
    GET_DOCUMTE_CATEGORIES,
    GET_CATEGORY,
    GET_SUB_SERVICES,
    GET_STATES,
    GET_DISTRICTS,
    GET_MUNICIPALITIES,
} from '../actions/types';

const initialState = {
    companyCategory: null,
    documentCategory: null,
    category: null,
    subServices: null,
    states: null,
    districts: null,
    municipalities: null,
  };
  
  export default function common(state = initialState, action) {
    switch (action.type) {
        case GET_COMPANY_CATEGORIES:
            return {
                ...state,
                ...action.payload,
                companyCategory: action.payload?.data,
            };
        case GET_DOCUMTE_CATEGORIES:
            return {
                ...state,
                ...action.payload,
                documentCategory: action.payload?.data,
            };
        case GET_CATEGORY:
            return {
                ...state,
                ...action.payload,
                category: action.payload?.data,
            };
        case GET_SUB_SERVICES:
            return {
                ...state,
                ...action.payload,
                subServices: action.payload?.data,
            };
        case GET_STATES:
            return {
            ...state,
            ...action.payload,
            states: action.payload?.data,
            };
        case GET_DISTRICTS:
            return {
                ...state,
                ...action.payload,
                districts: action.payload?.data,
            };
        case GET_MUNICIPALITIES:
            return {
                ...state,
                ...action.payload,
                municipalities: action.payload?.data,
            };
        default:
          return state;
    }
  }
  