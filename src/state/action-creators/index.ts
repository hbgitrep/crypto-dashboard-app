import { Action } from './../actions/index';
import { Dispatch } from 'react';
import { ActionType } from './../action-type/index';
import axios from 'axios';
import { coin } from '../reducers/CryptoReducer';


// action creator to fetch coins and dispatch SET_COINS_LIST
export const getCoinsList = () =>{
    return async (dispatch: Dispatch<Action>) => {
        const res = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=20');
        dispatch({
            type: ActionType.SET_COINS_LIST,
            payload: res.data.coins
        })
        return Promise.resolve(res.data.coins);
    }
}

// action creator to update search text
export const setSearchText = (searchStr: string)=> {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SEARCH_TEXT,
            payload: searchStr
        })
    }
}

// action creator to update selected coin
export const setSelectedCoin = (value: coin)=> {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SET_SELECTED_COIN,
            payload: value
        })
    }
}