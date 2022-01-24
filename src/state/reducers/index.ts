import {combineReducers} from 'redux';
import cryptoReducer from './CryptoReducer'

const reducers = combineReducers({
    cryptoCoins: cryptoReducer
})

export default reducers;

export type State = ReturnType<typeof reducers>;