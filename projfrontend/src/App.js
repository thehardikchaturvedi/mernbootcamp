import React,{useEffect} from 'react';
import Routes from './Routes';
import store from './redux/store'
import setAuthToken from './utils/setAuthToken'
import {Provider} from 'react-redux'
import {loadUser} from './redux/actions/auth'
if(localStorage.token){
  setAuthToken(localStorage.token)
}
export default function App() {
  useEffect(() => {
    store.dispatch(loadUser())
  }, [])
  return (
    <Provider store={store}>
      <Routes/>
    </Provider>
    );
}
