import { coin } from '../reducers/CryptoReducer';
import { ActionType } from './../action-type';
interface GetCoinsList {
    type: ActionType.GET_COINS_LIST;
    payload: coin[]
}

interface SetCoinsList {
    type: ActionType.SET_COINS_LIST;
    payload: coin[]
}

interface SetSearchText {
    type: ActionType.SET_SEARCH_TEXT;
    payload: string
}

interface setSelectedCoin {
    type: ActionType.SET_SELECTED_COIN;
    payload: coin
}

export type Action = GetCoinsList | SetCoinsList | SetSearchText | setSelectedCoin;