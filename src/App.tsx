import React, { useEffect } from 'react';
import './App.css';
import  CryptoList from './components/CryptoList'
import { bindActionCreators } from 'redux';
import { actionsCreators, State } from './state';
import { useDispatch, useSelector } from 'react-redux';
import { cryptoType } from './state/reducers/CryptoReducer';


function App() {
  
  const dispatch = useDispatch();

  // get required action creators 
  const {getCoinsList} = bindActionCreators(actionsCreators, dispatch);

  // get cryptoInfo state from store
  const cryptoInfo: cryptoType = useSelector((state: State) => state.cryptoCoins);

  // get coins list and update them to state
  useEffect(()=> {
    getCoinsList();
  }, [])
  
  return (
    <div className="app">
      <CryptoList cryptoInfo={cryptoInfo}/>
    </div>
  );
}

export default App;
