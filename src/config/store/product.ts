import { Dispatch } from "redux";

const DATAINIT={
  product:[]
}

const SAVE_PRODUCT='SAVE_PRODUCT'
//Reducer
export default function productReducer(state = DATAINIT, action:any) {
    switch(action.type){
        case SAVE_PRODUCT:
            return { ...state, product:action.payload };
        default: 
            return state
    }
}

// Actions
export const saveProduct = (value:[])=> async (dispatch:Dispatch<any>) => {
    dispatch({
        type: SAVE_PRODUCT,
        payload: value
    });
  };
  