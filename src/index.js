import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';


//1. Action 


//2. Action Creator

/* let ankit =()=>{

} */

//3. Reducer
let rootReducer =(oldState='Ankit Tanwar',action)=>{

  let newState = oldState
  switch(action.type) {
    case 'abc':
      // code block
      newState = action.payload
      
      break;
    
    default:
      // code block
  }
  return newState
}


//4 Store


let store = createStore(rootReducer)

console.log(store)

/* store.subscribe(()=>{
 console.log(store.getState())
})
store.dispatch({type:'abc',payload:"Ankit"})
store.dispatch({type:'def',payload:"Tanwar"}) */


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />

    </Provider>
  </React.StrictMode>
);


