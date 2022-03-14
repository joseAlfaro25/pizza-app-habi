import { Dispatch } from "redux";


const DATAINIT={
  home:false
}

const ACTIVE='ACTIVE'
//Reducer
export default function navReducer(state = DATAINIT, action:any) {
    switch(action.type){
        case ACTIVE:
            return { ...state, product:action.payload };
        default: 
            return state
    }
}

// Actions
export const activeNav = (value:any)=> async (dispatch:Dispatch) => {
    try {     
        dispatch({
            type: ACTIVE,
            payload: value
        });
    } catch (error) {
        
    }
  };
  