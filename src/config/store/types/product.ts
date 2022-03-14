import { IOrder } from "../../../module/register/types/product";

export type Actions='SAVE_PRODUCT'

export interface IProductState{
    dateCreated: Date,
    orders:IOrder
}

export interface IProductDataAction{
    type: Actions;
    payload:IProductState
}

export type IProductActionTypes=IProductDataAction;