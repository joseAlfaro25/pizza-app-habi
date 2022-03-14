export type Actions='ACTIVE'

export interface INavState{
    active:boolean
}

export interface INavDataAction{
    type: Actions;
    payload:INavState
}

export type INavActionTypes=INavDataAction;